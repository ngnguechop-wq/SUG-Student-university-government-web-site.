# SUG — Student University Government website

Static site (index.html, styles.css, script.js) served by nginx.

- Local: `docker build -t sug . && docker run -p 8080:8080 sug`
- Deploy: Railway builds the `Dockerfile`; nginx listens on `$PORT`; health check at `/healthz`.
