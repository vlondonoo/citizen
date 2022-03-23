## STEP 1: Build ###
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod


### STEP 2: Run web server ###
FROM nginx:alpine

COPY --from=node /app/dist/user-app /usr/share/nginx/html
RUN ls -la /usr/share/nginx/html

### execute
# docker build -t vlondonoo/citizen .
#docker run -d -p 4200:80 vlondonoo/citizen

##npx kill-port 4200