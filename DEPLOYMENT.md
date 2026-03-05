# MitarbeiterApp Pro - Deployment Dokumentation

## Inhaltsverzeichnis
1. [Projekt-Übersicht](#projekt-übersicht)
2. [Technologie-Stack](#technologie-stack)
3. [API-Endpunkte](#api-endpunkte)
4. [Mailserver-Einrichtung](#mailserver-einrichtung)
5. [Environment-Variablen](#environment-variablen)
6. [Build & Deployment](#build--deployment)

---

## Projekt-Übersicht

Die Landingpage besteht aus:
- **Frontend**: React + TypeScript + Vite + Tailwind CSS
- **Backend**: Express.js (API für Kontaktformular)
- **Hosting**: Cloudflare Pages / Vercel / beliebiger Static Host

---

## Technologie-Stack

| Komponente | Technologie |
|------------|------------|
| Frontend | React 18, TypeScript, Vite |
| Styling | Tailwind CSS v4 |
| Icons | Lucide React |
| Animationen | Motion (framer-motion) |
| Backend | Express.js, Nodemailer |
| Fonts | Manrope (lokal) |

---

## API-Endpunkte

### GET /api/health
Health-Check für den Server.

**Response:**
```json
{ "ok": true }
```

### POST /api/demo
Kontaktformular: Demo anfordern, Rückruf, Kontakt.

**Request Body:**
```json
{
  "name": "Max Mustermann",
  "email": "max@firma.de",
  "targetGroup": "Handwerk" | "Zeitarbeit",
  "requestType": "demo" | "callback" | "contact"
}
```

**Erfolgreiche Response (200):**
```json
{ "ok": true }
```

**Fehler-Response (400):**
```json
{ "ok": false, "error": "missing_fields" }
{ "ok": false, "error": "invalid_email" }
{ "ok": false, "error": "invalid_target_group" }
{ "ok": false, "error": "invalid_request_type" }
```

**Server-Fehler (500):**
```json
{ "ok": false, "error": "mail_send_failed" }
```

---

## Mailserver-Einrichtung

### Option 1: Eigenen Mailserver betreiben

Empfohlen für Production:
- **Postfix** (Linux) oder **MailEnable** (Windows)
- SPF, DKIM, DMARC konfigurieren
- TLS/SSL aktivieren

### Option 2: Transactional Mail Service (Empfohlen)

| Anbieter | Kostenlos | SMTP-Port |
|----------|-----------|------------|
| Mailgun | 5.000/Monat | 587 |
| SendGrid | 100/Monat | 587 |
| Resend | 3.000/Monat | 587 |
| AWS SES | 62.000/Monat | 587 |

### Option 3: Normales E-Mail-Konto

Beispiel für Webspace bei Hetzner/Strato/Ionos:
```
SMTP_HOST: mail.ihre-domain.de
SMTP_PORT: 587
SMTP_SECURE: false
SMTP_USER: ihr-email@ihre-domain.de
SMTP_PASS: ihr-passwort
```

---

## Environment-Variablen

Kopieren Sie `.env.example` nach `.env` und passen Sie die Werte an:

```bash
# Server-Port (Standard: 8787)
API_PORT=8787

# SMTP-Einstellungen
SMTP_HOST=mail.ihre-domain.de
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=ihr-email@ihre-domain.de
SMTP_PASS=ihr-passwort

# Empfänger und Absender
MAIL_TO=info@ihre-domain.de
MAIL_FROM=ihr-email@ihre-domain.de

# Optional: Vite Dev Proxy
API_PROXY_TARGET=http://localhost:8787
```

### Variablen-Erklärung

| Variable | Beschreibung | Beispiel |
|----------|--------------|----------|
| `API_PORT` | Port für den API-Server | `8787` |
| `SMTP_HOST` | Hostname des Mail-Servers | `mail.example.com` |
| `SMTP_PORT` | SMTP-Port (587 = TLS, 465 = SSL) | `587` |
| `SMTP_SECURE` | SSL/TLS verwenden | `false` |
| `SMTP_USER` | SMTP-Benutzername | `user@example.com` |
| `SMTP_PASS` | SMTP-Passwort | `***` |
| `MAIL_TO` | Empfänger der Anfragen | `info@example.com` |
| `MAIL_FROM` | Absender der E-Mails | `noreply@example.com` |

---

## Build & Deployment

### Frontend bauen

```bash
# Dependencies installieren
npm install

# Development
npm run dev

# Production Build
npm run build

# Vorschau Production Build
npm run preview
```

### Backend bauen

```bash
# Dependencies installieren
npm install

# Backend starten (Development)
npm run server:dev

# Backend starten (Production)
npm run server:start
```

### Deployment-Strategien

#### Cloudflare Pages
1. Build-Command: `npm run build`
2. Output Directory: `dist`
3. Environment Variables in Cloudflare Dashboard hinzufügen

#### Vercel
1. `vercel.json` erstellen:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install"
}
```
2. Environment Variables im Vercel Dashboard

#### Eigenen Server (Node.js)
```bash
# Frontend: dist-Ordner auf Webserver
# Backend: pm2 oder systemd service
```

---

## Frontend → Backend Kommunikation

### Development
Vite proxied `/api` automatisch zu `http://localhost:8787`

### Production
Entweder:
1. **CORS konfigurieren** in `server/index.ts`
2. **Reverse Proxy** (Nginx/Caddy) einrichten

### CORS aktivieren (optional)

Falls Frontend und Backend auf verschiedenen Domains:
```typescript
import cors from 'cors';

app.use(cors({
  origin: ['https://IhreDomain.de'],
  credentials: true,
}));
```

---

## SMTP-Test

Testen Sie Ihre SMTP-Konfiguration:

```bash
# Mit npx
npx nodemailer-validate -h smtp.ihre-domain.de -p 587 -u user -p pass
```

Oder mit.swishmail:
```bash
npx email-boilerplate -t
```

---

## Troubleshooting

### E-Mails kommen nicht an
1. **Spam-Ordner prüfen**
2. **SPF/ DKIM prüfen**: https://www.mail-tester.com
3. **Logs prüfen**: `console.error` im Server

### CORS-Fehler
- Backend und Frontend auf unterschiedlichen Domains?
- → CORS-Middleware aktivieren

### Port bereits belegt
- Anderen Port wählen: `API_PORT=8788`

---

## Sicherheits-Hinweise

1. **.env nie committen** - In `.gitignore` bereits ausgeschlossen
2. **SMTP-Passwort** - Regelmäßig ändern
3. **Rate Limiting** - Für Production empfohlen
4. **HTTPS erzwingen** - Via Cloudflare oder Nginx

---

## Ansprechpartner

Michael Friggemann  
Schwarzer Weg 29  
48683 Ahaus  
info@mitarbeiterapp.site
