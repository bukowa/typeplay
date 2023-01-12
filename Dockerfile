FROM node

WORKDIR /app
COPY . .

RUN npm install
RUN npx tsc \
    && cd tests && npx tsc \
    && node test_index.js