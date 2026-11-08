FROM nginx:1.27-alpine
COPY nginx/default.conf.template /etc/nginx/templates/default.conf.template
COPY index.html script.js styles.css favicon.svg robots.txt /usr/share/nginx/html/
ENV PORT=8080
EXPOSE 8080
