FROM node

WORKDIR /app
COPY . .

RUN npm install
RUN npx tsc \
    && cd test && npx tsc

WORKDIR /app
# https://nodejs.org/api/test.html#test-runner-execution-model

ENTRYPOINT ["node"]
CMD ["--test"]