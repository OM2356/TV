# Aai Baba TV ❤️

A simple, senior-friendly Marathi TV companion website built for Indian parents watching a **Samsung Smart TV** connected to a **Jio Set-Top Box (HDMI 2)**.

It runs 100% in the browser with **no backend server, no database, no login, and no API keys required**.

## Features

- **Marathi-First Simple Home**: Warm greeting, large buttons (`🙏 भजन आणि आरती`, `🎵 जुनी गाणी`, `📰 बातम्या`, `🎬 चित्रपट`, `😂 मनोरंजन`, `🎙️ बोलून शोधा`, and `📺 माझे चॅनेल`), plus Hindi and English switching.
- **My Channels (`📺 माझे चॅनेल`)**: Searchable Jio channel directory with Marathi channel names, English reference names, channel numbers, category filters, and a visual **"चॅनेल नंबर कसा शोधायचा?"** guide.
- **HDMI 2 & Step-by-Step TV Help Center (`🛠️ टीव्हीमध्ये काही अडचण आहे?`)**: Guided one-step-at-a-time troubleshooting for common TV and Jio Set-Top Box issues, prioritizing **HDMI 2** with safety warnings and simpler-word explanations.
- **Voice Search & Read Aloud**: Browser-supported Marathi speech recognition and text-to-speech with graceful fallback to manual search when unsupported.
- **Favourites & Recently Visited**: Save favourite channels, categories, and topics locally in `localStorage` along with recently visited items.
- **Accessibility Controls**: Light/Dark mode toggle and adjustable font sizes (`22px`, `25px`, `28px`) with large touch targets (`>= 65px`).

## Technology Stack

- React 19
- Vite
- TypeScript
- Tailwind CSS v4
- Lucide React Icons
- Browser `localStorage`, Web Speech API (optional browser support)

## Local Installation & Running

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```
4. Preview the production build locally:
   ```bash
   npm run preview
   ```

## Deploying to Vercel

1. Push this project folder to a GitHub repository.
2. Open [Vercel](https://vercel.com) and click **Add New Project**.
3. Import your GitHub repository.
4. Confirm the project settings:
   - **Framework Preset**: `Vite`
   - **Install Command**: `npm install`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**. No environment variables or API keys are needed.

## Project Structure

```text
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── README.md
└── src/
    ├── App.tsx
    ├── main.tsx
    ├── index.css
    ├── types.ts
    ├── assets/images/
    ├── components/
    ├── data/
    │   ├── channelsData.ts
    │   ├── simpleCatalog.ts
    │   ├── simpleTranslations.ts
    │   └── troubleshootingData.ts
    └── hooks/
        ├── useLocalStorage.ts
        └── useSpeech.ts
```
