FROM node:12
ENV PORT 3000
RUN mkdir -p /app
WORKDIR /app
COPY package.json yarn.lock /app/
RUN yarn install
COPY . /app
RUN yarn run build
EXPOSE 3000
CMD "yarn" "run" "dev"
