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
