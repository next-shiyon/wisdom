# image
FROM node:18

# set working diractory
WORKDIR /app

# copy package.json in working diractory
COPY package.json .

# copy React project in working diractory
COPY . .

# install node module
RUN yarn install

# open port
EXPOSE 5173

# start front-end server
CMD ["yarn", "dev"]

# build docker image
# docker build -t wisdom-frontend-image .

# run docker container
# docker run -d -p 3000:5173 --name wisdom-frontend-container wisdom-frontend-image