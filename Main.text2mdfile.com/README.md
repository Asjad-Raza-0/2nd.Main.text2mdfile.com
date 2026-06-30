# convert2md.com — PDF & Text to Markdown Converter

**100% client-side. Privacy-first. No uploads.**

Convert PDFs and HTML/text to clean Markdown directly in your browser. Your files never leave your machine.

## Features

- **PDF → Markdown**: Extract formatted Markdown from PDFs using PDF.js with spatial layout analysis, heading detection (H1-H6), bold/italic detection, and link extraction.
- **Text/HTML → Markdown**: WYSIWYG rich editor and raw HTML input via Turndown.
- **100% Private**: All processing happens locally in your browser. Zero server uploads.
- **Batch Conversion**: Convert multiple PDFs at once.
- **High-Accuracy Mode** (optional): Self-host a Python backend with pdfplumber for table extraction and better formatting.
- **Live Preview**: Side-by-side Markdown source and rendered HTML preview.
- **Password-Protected PDFs**: Built-in password prompt support.

## Tech Stack

- **Framework**: [Astro](https://astro.build) v7
- **Styling**: [Tailwind CSS](https://tailwindcss.com) v4
- **PDF Engine**: [PDF.js](https://mozilla.github.io/pdf.js/)
- **Markdown Rendering**: [Marked](https://marked.js.org/)
- **HTML→MD**: [Turndown](https://github.com/mixmark-io/turndown)
- **Sanitization**: [DOMPurify](https://github.com/cure53/DOMPurify)
- **Backend (optional)**: [FastAPI](https://fastapi.tiangolo.com/) + [pdfplumber](https://github.com/jsvine/pdfplumber)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

## Commands

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build for production to `./dist/` |
| `npm run preview` | Preview production build |

## Optional Backend (High-Accuracy Mode)

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --port 8000
```

Set the backend URL in the app UI under "Engine Mode" → "High-Accuracy Mode".

## License

MIT
