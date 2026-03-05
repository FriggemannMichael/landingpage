# CRO Optimierungen für MitarbeiterApp Pro Landingpage

## Korrigiertes Produktverständnis

### Was ist MitarbeiterApp Pro?
- **PWA für Mitarbeiter** (nicht für Unternehmen selbst)
- Mitarbeiter erstellen: Stundenzettel, Urlaubsanträge, Krankmeldungen, Vorschüsse
- Mit digitaler Unterschrift + PDF-Export mit QR-Code
- PDF wird an Kunden versendet → **automatisierte Erfassung** in dessen System (Bitfarm)
- Offline-first, DSGVO-konform, 10+ Sprachen

### Zielgruppe der Landingpage
- **Unternehmen** (Personaldienstleister, Handwerksbetriebe)
- Diese stellen die App ihren Mitarbeitern bereit
- Profitieren von: weniger Papier, automatisierter Datenerfassung, klare Prozesse

---

## Stärken der aktuellen Seite
- ✓ Headline mit klarem Nutzen ("Keine Zettel mehr. Keine Sucherei.")
- ✓ Starke CTA ("Kostenlose Demo sichern")
- ✓ DSGVO-Hinweis
- ✓ Pain Points Section
- ✓ Preis-Modell klar
- ✓ Mehrsprachig

---

## Todo-Liste

### Quick Wins (Sofort umsetzbar)

- [ ] **Mehr Kunden-Logos hinzufügen** - Aktuell nur Westfalia, mindestens 3-4 weitere
- [ ] **Testimonial hinzufügen** - Zitat von Unternehmen, das die App nutzt
- [ ] **Case Study: Automatisierung erklären** - "PDF mit QR-Code → automatische Erfassung in Bitfarm"
- [ ] **Zielgruppe klarer ansprechen** - "Für Unternehmen, die ihren Mitarbeitern digitale Prozesse bieten wollen"

### High-Impact Changes (Priorität)

- [ ] **UVP klarer formulieren** - Nicht "für Mitarbeiter" sondern "Ihre Mitarbeiter digitalisieren"
- [ ] **Automatisierungs-Vorteil betonen** - QR-Code + automatisierter Einleseprozess
- [ ] **Integration erklären** - "Funktioniert mit Bitfarm und anderen Systemen"
- [ ] **Security-Badges** - SSL, DSGVO-Siegel near CTA

### Test-Ideen (Für A/B-Tests)

- [ ] **Headline-Variationen testen** - "Spart täglich 60 Minuten" vs. aktuelle Version
- [ ] **CTA-Farbe testen** - Primärfarbe vs. kontrastreichere Farbe
- [ ] **Pain Points** - 3 vs. 5

---

## Content-Optimierungen

### Value Proposition (korrigieren)

Aktuell: "Digitale Stundenzettel, Urlaubs- und Vorschussanträge mit Signatur. Spart täglich bis zu 30 Minuten Verwaltungszeit."

Neu: "Ihre Mitarbeiter erfassen Stunden, Urlaub und Vorschüsse digital. Mit Unterschrift und QR-Code für automatische Erfassung in Ihrem System."

### Pain Points (anpassen)

Aktuell:
- "Stundenzettel gehen verloren"
- "Unterschriften suchen"
- "Urlaubsanträge liegen"

Neu (aus Unternehmenssicht):
- "Jeder Mitarbeiter erfasst seine Daten selbst"
- "Manuelle Datenerfassung kostet Zeit" → "PDF mit QR-Code wird automatisch eingelesen"

---

## Nächste Schritte

1. Kunden-Logos sammeln (weitere Personaldienstleister)
2. Testimonial von bestehendem Kunden anfragen
3. Case-Study-Zahlen von Westfalia erfragen (z.B. Zeitersparnis)
4. QR-Code/Automatisierung prominent zeigen

---

## SEO & WCAG Status

### Erledigt ✓

- [x] **robots.txt** - erstellt in `/public/`
- [x] **sitemap.xml** - erstellt in `/public/`
- [x] **Meta-Tags** - Title, Description, Keywords, Open Graph in index.html
- [x] **Alt-Texte** - Bilder haben Alt-Texte
- [x] **ARIA-Labels** - Navigation und Links beschriftet
- [x] **Sprachattribut** - `<html lang="de">` gesetzt
- [x] **Favicon** - Verweis in index.html

### WCAG Checks

- [ ] **Skip-Link** - "Zum Hauptinhalt springen" Link fehlt
- [ ] **Farbkontrast** - Sollte geprüft werden (z.B. Slate-300 auf dunklem Hintergrund)
- [ ] **Fokus sichtbar** - Tastaturnavigation prüfen
- [ ] **Überschriftenstruktur** - h1 → h2 → h3 Hierarchie prüfen
