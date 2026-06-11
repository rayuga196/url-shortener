# ShortURL

A URL shortener with click analytics — a learning project building toward a full-stack
application from scratch. Paste a long URL, get a short link back, and (eventually) track
every click.

> **Status: work in progress.** The frontend landing page and UI are built. The backend
> API and database are not implemented yet, so shortening is currently mocked on the
> client side. See [Roadmap](#roadmap) for what's done and what's next.

## Tech stack

- **Frontend:** vanilla HTML, CSS, and JavaScript (no framework)
- **Backend:** Node.js (planned — Express API)
- **Storage:** JSON file to start, with a real database planned

## Features

- [x] Responsive landing page (hero, features, how-it-works, about)
- [x] Shorten form with custom-alias input and copy-to-clipboard
- [ ] Real short-code generation on the server
- [ ] Redirect from short code to the original URL
- [ ] Click analytics per link
- [ ] Persistent storage

## Getting started

The frontend is fully static — no build step or dependencies needed.

```bash
git clone https://github.com/rayuga196/url-shortener.git
cd url-shortener/client
```

Then open `index.html` in your browser, or serve it locally:

```bash
# Python (if installed)
python3 -m http.server 5500
# then visit http://localhost:5500
```

> Note: the backend in `server/` is not implemented yet, so links generated in the UI
> are placeholders and won't actually redirect.

## Project structure

```
url-shortener/
├── client/          # Frontend
│   ├── index.html
│   ├── style.css
│   └── script.js
└── server/          # Backend (in progress)
    ├── server.js
    └── data.json
```

## Roadmap

1. Build the Express server with a `POST /shorten` endpoint
2. Generate and store unique short codes
3. Add a `GET /:code` route that redirects to the original URL
4. Wire the frontend to the real API
5. Record and display click analytics

## About

Built by Palash as a hands-on project to learn full-stack web development.
