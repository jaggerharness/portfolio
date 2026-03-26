# Jagger Portfolio

Nebula-themed personal portfolio built with Next.js App Router, TypeScript, and Tailwind CSS.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` - Start local development server
- `npm run lint` - Run ESLint
- `npm run build` - Create production build
- `npm run start` - Start production server after build

## Easter eggs

The site includes intentionally hidden interactions:

### 1) Constellation transmission reveal

In the Skills constellation, hover (or tap/click) the first skill in each section (in any order):

- `TypeScript` (Languages)
- `React` (Frameworks & platforms)
- `MySQL` (Databases)
- `Jest` (Testing)
- `Google Cloud Platform` (Cloud & infrastructure)
- `Git` (Tools & practices)

This reveals:

- `Decoded transmission: JAZZ HANDS DETECTED · AMAAAZE`

### 2) Header callsign mode

On the `JH · portfolio` brand text in the header:

- Triple-click quickly, **or**
- Long-press for about 0.6 seconds

This toggles a temporary captain-mode color shift and shows a `Captain mode: callsign locked` toast.

### 3) Checksum decoder

The `Epilogue checksum` line in the Hero and status pages is clickable.
Click it 3 times to cycle the message:

1. `0x2A · nominal`
2. `0xC0FFEE · caffeinated`
3. `0xAMAZE · contact confirmed`

### 4) Konami code burst

Anywhere on the site, enter the classic sequence:

- `↑ ↑ ↓ ↓ ← → ← → B A`

This shows the small confirmation toast and temporarily **supercharges the starfield layer** (hyper twinkle + amplified brightness on the background stars).
