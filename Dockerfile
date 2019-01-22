# specify the node base image with your desired version node:<version>
FROM node:alpine
ADD . /app 
WORKDIR /app
# replace this with your application's default port
EXPOSE 80
CMD ["npm", "start"]