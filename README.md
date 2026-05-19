# Incognito — Team Portfolio

Premium team portfolio for **Incognito**, building **BroFocus**.

## Run locally

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Customize

- **Team members**: edit `src/data/team.ts` (names, mottos, bios, social links, `resumeUrl`)
- **Project**: edit `src/data/project.ts` and the Stitch link
- **Résumés**: place PDFs in `public/resumes/` matching paths in `team.ts`

## Pages

| Route | Description |
|-------|-------------|
| `/` | Landing — hero, project brief, team grid |
| `/project` | Interactive BroFocus discussion |
| `/team/:id` | Full member profile |
