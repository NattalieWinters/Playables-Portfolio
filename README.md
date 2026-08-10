# Playable Arcade

A zero-dependency showcase for the standalone HTML playables in `Playable Ads/`.

## Run locally

You can open `index.html` directly. For the most reliable WebAssembly behavior,
serve the folder over HTTP instead:

```powershell
python -m http.server 8080
```

Then visit `http://localhost:8080`.

The catalog does not modify or bundle the original playable files. Each tile opens
its source HTML inside a full-window iframe, with controls to reload it or open it
in a separate tab.

## Choose the highlights

Edit `highlights.js` to choose the five cards shown between the intro and the full
collection. Keep exactly five unique paths in `window.PLAYABLE_HIGHLIGHTS`; their
order in the array is their left-to-right order on the page. Each path must match a
playable's `file` value in `app.js` exactly.
