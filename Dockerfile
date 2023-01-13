FROM node


WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm install

COPY . .
RUN ls
WORKDIR /app
# https://nodejs.org/api/test.html#test-runner-execution-model

ENTRYPOINT ["/bin/bash", "-c"]
CMD ["npm run jest"]