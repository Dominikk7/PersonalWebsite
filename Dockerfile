#FROM node:16.20.1-buster as build

#Commands will operate in WORKDIR
#WORKDIR /code

#CMD git clone https://github.com/Dominikk7/PersonalWebsite
#RUN apt-get install --assume-yes git
#RUN git clone https://github.com/Dominikk7/PersonalWebsite

#Copy src code
#COPY . .

#RUN npx expo export:web  
#WORKDIR /code/PersonalWebsite
#COPY package.json package.json
#COPY package-lock.json package-lock.json
#RUN npm install --force

#WORKDIR /code
#COPY . .
#CMD ["sh","-c","git pull https://github.com/Dominikk7/PersonalWebsite && npx expo export:web"]

FROM nginx:1.25.1-alpine as prod

RUN apk add git
WORKDIR /code
RUN git clone https://github.com/Dominikk7/PersonalWebsite

#COPY --from=build /code/PersonalWebsite/web-build /usr/share/nginx/html

COPY default.conf /etc/nginx/conf.d/

EXPOSE 80
WORKDIR /code/PersonalWebsite
CMD ["sh","-c","git pull https://github.com/Dominikk7/PersonalWebsite && nginx -g 'daemon off;'"]
#CMD ["nginx", "-g", "daemon off;"]


