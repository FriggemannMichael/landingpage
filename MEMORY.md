# Memory

## 2026-03-04

### Task
Start with review item 1: fix the broken React entrypoint and document the work.

### Errors Found
- `npm run lint` failed because the root file `main.tsx` contained CSS instead of TypeScript/React code.
- `npm run build` failed because `index.html` referenced `/src/main.tsx`, but that file did not exist.
- The project had the CSS duplicated in two places: `main.tsx` (wrong file type) and `inex.css`.

### Root Cause
- The app bootstrap file was missing from `src/`.
- A stylesheet had been saved into `main.tsx`, which caused the TypeScript parser to fail immediately.

### Changes Made
- Deleted the invalid root `main.tsx` file.
- Added a proper React/Vite bootstrap file at `src/main.tsx`.
- The new entrypoint:
- Uses `createRoot` from `react-dom/client`.
- Wraps the app in `StrictMode`.
- Imports `App` from `src/App.tsx`.
- Imports the existing stylesheet from `../inex.css`.

### Verification Plan
- Run `npm run lint`.
- Run `npm run build`.

### Verification Results
- `npm run lint` passed on 2026-03-04 after the entrypoint fix.
- `npm run build` passed on 2026-03-04 after the entrypoint fix.
- Vite produced a production build successfully in `dist/`.

### Notes
- `inex.css` is still oddly named. It works, but it should likely be renamed later to `index.css` for consistency.

### Follow-up 1: Client Secret Exposure

#### Errors Found
- `vite.config.ts` exposed `GEMINI_API_KEY` to the frontend bundle through Vite `define`.
- Unprefixed environment loading for browser-facing config made it too easy to leak server secrets.

#### Root Cause
- Build configuration mixed client and server concerns.

#### Changes Made
- Removed `loadEnv` from `vite.config.ts`.
- Removed the `define` block that injected `process.env.GEMINI_API_KEY` into browser code.

#### Expected Outcome
- The frontend build no longer embeds the Gemini API key by default.

#### Verification Results
- `npm run lint` passed on 2026-03-04 after the config change.
- `npm run build` passed on 2026-03-04 after the config change.

### Follow-up 2: Replace In-Memory View State With URL Routing

#### Errors Found
- Navigation was previously managed with React state (`currentView`) instead of URL routes.
- This prevented deep links, browser history navigation, and direct linking to individual pages.

#### Root Cause
- The app used a local `switch` over string state in `App.tsx` as a lightweight router substitute.

#### Changes Made
- Installed `react-router-dom`.
- Wrapped the app with `BrowserRouter` in `src/main.tsx`.
- Replaced the state-based view switch in `src/App.tsx` with `Routes`, `Route`, and a catch-all redirect.
- Updated page transition keys to use `location.pathname`.
- Updated `Navbar` to derive active state from the current path and navigate with `useNavigate`.
- Updated `LandingPage` CTA buttons and feature cards to navigate via routes instead of `setView`.

#### Additional Errors During Fix
- `npm run lint` temporarily failed after the routing refactor because:
- `LandingPage.tsx` still used `Zap` after the import cleanup.
- `React.cloneElement` had an invalid generic shape for the inferred icon type.

#### Resolution
- Restored the `Zap` import in `LandingPage.tsx`.
- Replaced stored icon elements with icon component references and rendered them directly.

#### Verification Results
- `npm run lint` passed on 2026-03-04 after the routing refactor and follow-up fix.
- `npm run build` passed on 2026-03-04 after the routing refactor and follow-up fix.

#### Outcome
- The app now supports route-based navigation with browser history and direct URLs.

### Follow-up 3: TypeScript Config Cleanup

#### Errors Found
- `tsconfig.json` resolved `@/*` to the project root, while Vite resolved `@` to `./src`.
- The config was too permissive for a React TypeScript app (`allowJs`) and missing strict type checking.
- It also contained options that did not match a modern Vite React frontend (`experimentalDecorators`, `allowImportingTsExtensions`, `useDefineForClassFields: false`).

#### Root Cause
- The TypeScript config looked like a mixed or copied setup rather than a focused frontend configuration.

#### Changes Made
- Added `baseUrl: "."`.
- Changed the TypeScript alias to `@/* -> ./src/*` so it matches Vite.
- Added `types: ["vite/client"]`.
- Enabled `strict: true`.
- Removed `experimentalDecorators`.
- Removed `allowJs`.
- Removed `allowImportingTsExtensions`.
- Switched `useDefineForClassFields` to `true`.

#### Expected Outcome
- TypeScript and Vite now resolve aliases consistently.
- The project gets stricter and more predictable type checking.

#### Additional Errors During Fix
- After enabling stricter TypeScript settings, `npm run lint` failed because the project was missing React DOM type declarations for `react-dom/client`.

#### Resolution
- Installed `@types/react` and `@types/react-dom` as dev dependencies.

#### Verification Results
- `npm run lint` passed on 2026-03-04 after the TypeScript config cleanup and type package installation.
- `npm run build` passed on 2026-03-04 after the TypeScript config cleanup and type package installation.

### Working Mode Update
- `MEMORY.md` is now maintained as a living document.
- New work should be appended as running history, including temporary regressions, fixes, and current verification state.

### Follow-up 4: Accessibility and Semantic Interactions

#### Problems Addressed
- `Navbar` used a clickable `div` for the logo instead of a semantic control.
- The mobile menu toggle in `Navbar` had no `aria-label`, `aria-expanded`, or `aria-controls`.
- Landing page feature cards were clickable containers instead of keyboard-friendly buttons.
- The FAQ section in `Contact` looked interactive but had no real toggle behavior.

#### Changes Made
- Converted the `Navbar` logo trigger from a `div` to a `button`.
- Added explicit `type="button"` to navbar action buttons.
- Added `aria-label`, `aria-expanded`, and `aria-controls` to the mobile nav toggle and linked it to the mobile menu panel.
- Converted landing page feature cards from `motion.div` to `motion.button`.
- Implemented real FAQ accordion state in `Contact` with `useState`.
- Replaced the static FAQ containers with accessible toggle buttons and conditional answer panels.

#### Verification Results
- `npm run lint` passed on 2026-03-04 after the accessibility changes.
- `npm run build` passed on 2026-03-04 after the accessibility changes.

#### Current Status
- The primary navigation and FAQ interactions are now semantically interactive and keyboard-accessible.
- There are still additional accessibility improvements available later (for example form labels/ids and reduced-motion support), but the most obvious semantic issues from the review are addressed.

## 2026-03-05

### Redesign: Single Landingpage Without Images

#### Goal
- Replace the previous multi-page structure and mismatched visuals with one cohesive landingpage focused on product value.
- Remove image-dependent sections and keep a clean, conversion-oriented UI.

#### Changes Made
- Simplified app structure to a single-page setup in `src/App.tsx`.
- Removed unused page components and preview-only components:
- `AdvancePayments.tsx`
- `Timesheets.tsx`
- `Vacation.tsx`
- `Setup.tsx`
- `Contact.tsx`
- `AppMockupStrip.tsx`
- Rebuilt `LandingPage.tsx` from scratch as a complete no-image redesign:
- Strong hero with value proposition
- KPI/value strip
- Feature pillars (Stundenzettel, Urlaub, Vorschuss)
- Process flow section (Erfassen, Bestaetigen, Weitergeben)
- Conversion CTA section
- Refactored `Navbar.tsx` to anchor-based navigation (`#start`, `#funktionen`, etc.) and updated styling for dark hero contrast.
- Updated `Footer.tsx` copy to align with target audience and conversion messaging.

#### Content Direction (Conversion)
- New message emphasizes reduced paperwork, fewer back-and-forth clarifications, and faster operations.
- Target audience explicitly framed as personel services use-cases (`Personaldienstleister`).
- CTA wording strengthened (`Kostenlose Demo sichern`, `Demo sichern`).

#### Verification
- `npm run build` passed on 2026-03-05 after redesign and copy updates.
- Verified no `img` usage remains in `src/components`.

#### Current Status
- Landingpage is now fully image-free, visually coherent, and conversion-focused.
- Ready for next iteration on tone (du/Sie), legal footer links, and final production copy.

### Follow-up 5: Own API Endpoint for Demo Form

#### Goal
- Remove third-party form forwarding and use an own backend endpoint that can run on a small mail server.

#### Changes Made
- Added SMTP API server at `server/index.ts` using Express + Nodemailer.
- New endpoints:
- `GET /api/health`
- `POST /api/demo`
- Added input validation for `name`, `email`, and `targetGroup` (`Handwerk` or `Zeitarbeit`).
- Added mail delivery via SMTP env configuration (`SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `MAIL_TO`, `MAIL_FROM`).
- Updated landing form submission from FormSubmit to internal `/api/demo` endpoint.
- Added Vite dev proxy for `/api` in `vite.config.ts`.
- Added scripts in `package.json`:
- `dev:api`
- `start:api`
- Added `.env.example` and setup instructions in `README.md`.

#### Verification Results
- `npm run lint` passed on 2026-03-05 after API integration.
- `npm run build` passed on 2026-03-05 after API integration.
