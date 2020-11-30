[![TypeScript](https://badges.frapsoft.com/typescript/code/typescript.svg?v=101)](https://github.com/ellerbrock/typescript-badges/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](./LICENSE)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.png?v=103)](https://github.com/ellerbrock/open-source-badges/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# codebasemonorepo
This project aims to maintain a monorepo codebase to make the development of any project using Node, React, React-Native, GraphQL, TypeScript and MongoDB more agile.

## TypeScript Features
- OOP
- Interface

---

## GraphQL Principles

Principles of Integrity: Ensure that the Schema GraphQL is well defined, stable and consistent.

    Unique GraphQL Schema - The company must have a unified GraphQL Schema, instead of one per team.
    Shared implementation - The implementation of GraphQL Schema must be shared between teams / teams.
    Track the Schema in Records - There must be a single true source to track the GraphQL Schema.

Principles of Agility: Distribute and adapt quickly to necessary changes.

    Abstract and Demand-Oriented Schema - The schema should act as an abstraction layer that provides flexibility to consumers, hiding the details of the implementation.
    Agile approach to the development of Schemas - The scheme must be built incrementally based on real requirements and evolve over time.
    Iteratively improve performance - Performance management should be an ongoing process, adapting to changes in query loads and service implementations.
    Use Metadata to Empower Developers - Developers must have knowledge of the GraphQL API throughout the development process.

Operating Principles: Safely implement the GraphQL API for production.

    Demand Access and Control - Grant access by customer and manage what and how they can access it.
    Structured Log - Capture structured logs of all operations and take advantage of them as a tool to understand the use of the GraphQL API.
    Separate the GraphQL Layer from the Service Layer - Adopt a layered architecture with the functionality of the GraphQL API on a separate layer, instead of being incorporated into all services.
---

## Global Dependencies:
Packages  | Version
--------- | ------
[Prettier](https://github.com/prettier/prettier/blob/master/README.md) | [![npm version](https://camo.githubusercontent.com/a4821b9b033f25634cab2686be36d84c606e25dd/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f70726574746965722e7376673f7374796c653d666c61742d737175617265)](https://www.npmjs.com/package/prettier)
[Eslint](https://github.com/eslint/eslint/blob/master/README.md) | [![npm version](https://camo.githubusercontent.com/ec546fef99e14a0e87f14c716e1a7db8bec6f528/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f65736c696e742e737667)](https://www.npmjs.com/package/eslint)

## Web Dependencies:
Packages  | Version
--------- | ------
[React](https://github.com/facebook/react/blob/master/README.md) | ![img.png](https://camo.githubusercontent.com/475b49b04214dfa67c1ec8a2837888ae63003feb7b71fd45be30ff360148ad87/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f72656163742e7376673f7374796c653d666c6174)
[React DOM](https://github.com/facebook/react/blob/master/packages/react-dom/README.md) | ![img.png](https://camo.githubusercontent.com/475b49b04214dfa67c1ec8a2837888ae63003feb7b71fd45be30ff360148ad87/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f72656163742e7376673f7374796c653d666c6174)

## Mobile Dependencies:
Packages  | Version
--------- | ------
[React](https://github.com/facebook/react/blob/master/README.md) | ![img.png](https://camo.githubusercontent.com/475b49b04214dfa67c1ec8a2837888ae63003feb7b71fd45be30ff360148ad87/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f72656163742e7376673f7374796c653d666c6174)
[React Native](https://github.com/facebook/react-native/blob/master/README.md) | ![img_1.png](https://camo.githubusercontent.com/581876c6737fdf87aa502305c12f83af6fc0f1c9fdb4c40e359582d688c10c31/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f72656163742d6e61746976653f636f6c6f723d627269676874677265656e266c6162656c3d6e706d2532307061636b616765)



## Backend Dependencies:
Packages  | Version
--------- | ------
[TS-node-dev](https://github.com/whitecolor/ts-node-dev/blob/master/README.md) | ![img_2.png](https://camo.githubusercontent.com/b0dacd325238c9791d76a43310e19cc97dcd210a4b41120b598e57ec83c79d7e/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f74732d6e6f64652d6465762e7376673f6d61784167653d3836343030)
[Colors](https://www.npmjs.com/package/colors) | ![img_8.png](https://img.shields.io/npm/v/colors.svg)
[Bcryptjs](https://www.npmjs.com/package/bcryptjs) | ![img_3.png](https://img.shields.io/npm/v/bcryptjs.svg)
[Express](https://github.com/expressjs/express/blob/master/Readme.md) | [![npm version](https://camo.githubusercontent.com/c031efcc66c1bfc646f4369604955b26f3e1dbcb/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f657870726573732e737667)](https://www.npmjs.com/package/express)
[ClassValidator](https://www.npmjs.com/package/class-validator) | ![img_7.png](https://badgen.net/packagephobia/install/class-validator)
[TypeGraphQL](https://www.npmjs.com/package/type-graphql) | ![img_9.png](https://camo.githubusercontent.com/422e661c2c725710087ef6252d9413ede425ddff81cfd67c4a9bffbb04a348fa/68747470733a2f2f62616467652e667572792e696f2f6a732f747970652d6772617068716c2e737667)
[TypeScript](https://github.com/microsoft/TypeScript/blob/master/README.md) | [![npm version](https://camo.githubusercontent.com/020422d38770ea7d3eb37b8d8164001ba197b779/68747470733a2f2f62616467652e667572792e696f2f6a732f747970657363726970742e737667)](https://www.npmjs.com/package/typescript)
[ApolloServer](https://www.npmjs.com/package/apollo-server) | ![img_6.png](https://d25lcipzij17d.cloudfront.net/badge.svg?id=js&type=6&v=2.19.0&x2=0)
[GraphQL](https://www.npmjs.com/package/graphql) | ![img_5.png](https://d25lcipzij17d.cloudfront.net/badge.svg?id=js&type=6&v=15.4.0&x2=0)
[Jest](https://github.com/facebook/jest/blob/master/README.md) | [![npm version](https://camo.githubusercontent.com/d231c42e928e671a80783fd28be8a6d6d4d70ea4/68747470733a2f2f62616467652e667572792e696f2f6a732f6a6573742e737667)](https://www.npmjs.com/package/jest)
[Mongoose](https://www.npmjs.com/package/mongoose) | ![img_4.png](https://camo.githubusercontent.com/655896d1bb51187d0030fff4dd35a2034b5f44003fff7d17140f5dff3b3ef2ad/68747470733a2f2f62616467652e667572792e696f2f6a732f6d6f6e676f6f73652e737667)


## Prerequisites

### NodeJs

- [Download](https://nodejs.org/en/download/)

```bash
node --version
```

### Yarn

```
npm install -g yarn

yarn -version
```

### TypeScript
```
npm install -g typescript

tsc --version
```

---

## Getting Started

Clone the repo and use `yarn` to install dependecies

```bash
git clone https://github.com/georgebezerra/codebasemonorepo.git
cd codebasemonorepo
yarn
```
---
Start server

```
cd packages/server
yarn dev:server
```

---

Start Web

```
cd packages/web
yarn start
```

---

Start Mobile

```
cd packages/mobo
yarn start
```

---

## Licence

This project is open-source software licensed under the [GNU General Public License v3.0](https://github.com/georgebezerra/codebasemonorepo/blob/main/LICENSE)

---

Development by

Developer / Author: George Bezerra


https://github.com/georgebezerra
