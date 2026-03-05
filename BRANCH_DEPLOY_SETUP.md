# Deploy-Branch per GitHub Actions (SSH) - Schritt fuer Schritt

Diese Anleitung erklaert, was du nach der Workflow-Datei noch machen musst, damit Deploys funktionieren.

Voraussetzung:
- Die Datei `.github/workflows/branch-deploy.yml` ist bereits im Repo vorhanden.

## 1. SSH Deploy Key lokal erzeugen

Im Projektordner oder irgendwo lokal:

```bash
ssh-keygen -t ed25519 -C "github-actions-deploy" -f gh_deploy_key
```

Danach hast du:
- `gh_deploy_key` (privater Key, kommt in GitHub Secret)
- `gh_deploy_key.pub` (oeffentlicher Key, kommt auf den Server)

## 2. Public Key auf dem Server eintragen

Per SSH auf den Server einloggen (mit dem User, der deployen soll), dann:

```bash
mkdir -p ~/.ssh
chmod 700 ~/.ssh
cat >> ~/.ssh/authorized_keys
```

Jetzt den Inhalt aus `gh_deploy_key.pub` einfuegen, Enter, dann `Ctrl+D`.

Anschliessend:

```bash
chmod 600 ~/.ssh/authorized_keys
```

## 3. Deploy-Zielordner auf dem Server erstellen

Beispiel:

```bash
mkdir -p /var/www/landing
```

Wichtig:
- Der `DEPLOY_USER` muss Schreibrechte auf diese Ordner haben.

Optional Rechte setzen:

```bash
chown -R deploy:deploy /var/www/landing
```

(`deploy` durch deinen echten Linux-User ersetzen)

## 4. GitHub Secrets setzen

In GitHub:
`Repository -> Settings -> Secrets and variables -> Actions -> New repository secret`

Lege diese Secrets an:

1. `DEPLOY_HOST`
2. `DEPLOY_PORT` (z. B. `22`)
3. `DEPLOY_USER`
4. `DEPLOY_SSH_KEY` (Inhalt von `gh_deploy_key`, kompletter privater Key inkl. BEGIN/END Zeilen)
5. `DEPLOY_PATH` (z. B. `/var/www/landing`)

## 5. Workflow committen und pushen

```bash
git add .github/workflows/branch-deploy.yml BRANCH_DEPLOY_SETUP.md
git commit -m "Add branch deploy setup guide"
git push
```

## 6. Deploy testen

### Branch `deploy` anlegen und pushen
```bash
git checkout -b deploy
git commit --allow-empty -m "test deploy branch"
git push -u origin deploy
```

Dann in GitHub unter `Actions` pruefen:
- Workflow `Deploy Branch via SSH` gestartet
- Schritt `Deploy dist via rsync` erfolgreich

## 7. Ergebnis auf Server pruefen

Per SSH:

```bash
ls -la /var/www/landing
```

Du solltest Dateien wie `index.html` und `assets/` sehen.

## Troubleshooting

### `DEPLOY_HOST missing` oder `DEPLOY_PATH missing`
- Secret fehlt oder falsch benannt.

### `Permission denied (publickey)`
- Public Key nicht korrekt in `~/.ssh/authorized_keys`.
- Falscher User in `DEPLOY_USER`.

### `rsync: command not found`
- `rsync` auf Server installieren.

### Dateien werden deployed, aber Website zeigt nichts
- Webserver-Root (Nginx/Apache) zeigt auf falschen Ordner.
- Caching leeren.

## Sicherheit

- Private Key `gh_deploy_key` niemals committen.
- Nur als GitHub Secret speichern.
- Deploy-User mit minimal noetigen Rechten verwenden.
