FROM node:16.20.1-buster as build

#Commands will operate in WORKDIR
WORKDIR /code

#CMD git clone https://github.com/Dominikk7/PersonalWebsite
RUN apt-get install --assume-yes git
RUN git clone https://github.com/Dominikk7/PersonalWebsite

#Copy src code
#COPY . .

#RUN npx expo export:web "git", "pull", "https://github.com/Dominikk7/PersonalWebsite", 
WORKDIR /code/PersonalWebsite
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install --force

CMD ["npx", "expo", "export:web"]
#CMD [ "npm", "run", "start" ]

#FROM nginx:1.25.1-alpine as prod



