# CodeX

CodeX is a Pair programming webApp whare developer stay connect and pair with programer who work on their favourite languages. 


## Tech Stack

**Client :** React, Zustand, TailwindCSS, NextJS, Stream.io

**Server :** Node, Express, drizzleORM, Postgrsql, Docker


## Features

🌙 Light/dark mode toggle

➿ Live previews.

🖥️ Fullscreen mode.

➕ CRUD Rooms.

⚓ Google Authentication/safe data.

🎉 Live Code collobration.

🔎 Find favourite programing language Rooms.

🦭 search participant.

🌀 browse rooms.


## Installation

Install my-project with npm

```bash
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
```

Install docker Engine Your Local machine :

Spinup data base using docker 

```bash
  docker compose up
```

For database push on your machine 

Run drizzle command (setup in package.json)

```bash
npm run db:push
```
For Drizzle studio Run 

```bash
npm run db:studio
```
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DATABASE_URL=""`

`GOOGLE_CLIENT_ID=""`

`GOOGLE_CLIENT_SECRET=""`

`NEXT_PUBLIC_GET_STREAM_API_KEY=""`

`GET_STREAM_SECRET_KEY=""`


## Run Locally

Clone the project

```bash
  git clone https://github.com/Darshit02/codex
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


