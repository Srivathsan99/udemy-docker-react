FROM node:16.13.1 as builder            

WORKDIR '/app' 

COPY package.json .
RUN npm install --verbose
COPY . .
RUN npm run build

FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html