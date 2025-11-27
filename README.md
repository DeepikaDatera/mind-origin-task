# Mindorigin Portfolio — React + TypeScript + Vite

🔧 A small finance dashboard built with React, TypeScript and Vite. It demonstrates a live market watch using Finnhub WebSockets and a simple portfolio view using Ant Design, Tailwind CSS and Recharts.

This README replaces the original Vite template and documents how to run, configure and extend this project.

---

## 🚀 Key features

- Live market updates (WebSocket) via Finnhub (wss://ws.finnhub.io)
- Live price strip (ticker row), portfolio summary, holdings table and a multi-line price chart (Recharts)
- Built with React + TypeScript + Vite
- UI: Ant Design + Tailwind CSS

---

## 🔎 Project structure (important files)

- `src/` — application source
  - `main.tsx` — app bootstrap and context providers
  - `App.tsx` — root app that mounts the dashboard
  - `context/` — global contexts (WebSocket, theme, header toggle)
  - `components/dashboard` — UI pieces: `LiveStockStrip`, `PortfolioSummeryCard`, `HoldingTable`, `LineChart`
  - `components/layouts` — `PageLayout`, header and sidebar

---

## 📦 Requirements

- Node.js (v18+ recommended)
- npm or yarn

---

## ⚙️ Setup and development

1. Install dependencies

```powershell
npm install
```

2. Start the dev server

```powershell
npm run dev
```

The app runs with Vite at http://localhost:5173 by default.

---

## 🔐 Finnhub WebSocket API token

The app currently connects to Finnhub using a token embedded in the code (`src/context/WebContext.tsx`). For production or private repositories you should NOT commit API tokens.

Recommended approach:

1. Remove the hard-coded token and use a Vite environment variable. e.g. in `src/context/WebContext.tsx`:

```ts
const socket = new WebSocket(`wss://ws.finnhub.io?token=${import.meta.env.VITE_FINNHUB_TOKEN}`)
```

2. Create a `.env` file at the repo root (add `.env` to `.gitignore`):

```text
VITE_FINNHUB_TOKEN=your_real_token_here
```

3. Restart the dev server

```powershell
npm run dev
```

If you don't provide a token the app will not receive live updates from Finnhub.

---

## 🔧 Scripts

- `npm run dev` — run dev server (Vite)
- `npm run build` — build for production (TypeScript build + Vite build)
- `npm run preview` — locally preview the production build
- `npm run lint` — run ESLint

---

## 📋 Notes & suggestions

- The project uses a public or demo Finnhub WebSocket token in code — replace with a secure environment variable.
- Consider moving the portfolio sample data to a JSON fixture or a backend API for easier testing.
- Add unit/integration tests (e.g., Vitest/React Testing Library) to improve safety for refactors.

---

## 🤝 Contributing

If you'd like to help improve this project:

1. Fork the repository
2. Create a feature branch (e.g., `feature/readme`)
3. Open a PR

---

## 📜 License

Add your license here (e.g., MIT). If you want me to pick a license and add it to the repo I can do that too.

---

If you want, I can also update the code to use environment variables (VITE_FINNHUB_TOKEN) instead of the hard-coded token, and add a `.env.example`. Would you like me to implement that next?
