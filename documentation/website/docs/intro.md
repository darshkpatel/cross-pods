---
id: intro
title: Getting Started
---
Cross Pods is a simple web app  that helps MLH Fellows to meet people from other pods. It setup random meetings using [JIT.si](https://meet.jit.si/). Three fellows from a different pods are selected and matched for dicussion. It helps fellows to develop connections outside there pods.

## Tech Stack
Every technology used is open-source. The app has a frontend and backend. Following technology are used:-
- [Next.js](https://nextjs.org/)
- [Node.js]()
- [Mongodb]()
- [Mongoose]()

## Local development
For local development clone the repo and install dependencies.

```shell
$ git clone https://github.com/MLH-Fellowship/0.3.2-team2-cross-pods.git

```

```shell
$ cd 0.3.2-team2-cross-pods

```

```shell
$ cp env.example .env.local

```


```shell
$ yarn

````

```shell
$ yarn dev

```

## ENV Variables
We use `.env.local` to provide Database url etc.

1. AUTH0_CLIENT_ID: Client id from Auth0
1. AUTH0_CLIENT_SECRET: Client secret from Auh0
1. AUTH0_DOMAIN: Auth0 domain for redirection etc.
1. COOKIE_SECRET: Secret for session
1. NEXT_PUBLIC_HOSTNAME: Hostname for hosting of frontend
1. DATABASE_URL: Mongodb url