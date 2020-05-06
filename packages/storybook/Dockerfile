FROM nginx:1.17

COPY packages/storybook/storybook-static/ /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
