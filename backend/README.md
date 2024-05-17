# fastify-jsdoc-quick-start

Quick start for Fastify, JSDoc, ESlint, Prettier and DrizzleORM


## Quick Start

### Comes equipped with

- Dockerfile including postgres and redis
- JSDoc type annotations
- XO
- Prettier
- DrizzleORM
- Fastify
- Zod

### Prerequisites

- [Docker](https://docs.docker.com/get-docker/)
- [Yarn](https://yarnpkg.com/getting-started/install)
- [NodeJS](https://nodejs.org/en/download/)


### Getting Started

1. Clone the repo
2. Run `yarn install`
3. Run `docker-compose up -d` (-d to detach from the terminal)
4. Run `yarn dev` to start the dev server
5. Make your changes
6. Run `yarn lint` to lint your code
7. Run `yarn start` to start the production server


# Credits

Originally cloned from https://github.com/Looskie/fastify-drizzle-quick-start and transformed to use JSDoc over Typescript