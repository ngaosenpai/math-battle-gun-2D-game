# requirement:
- install docker desktop
- install mongo compas

## if done dump UI
we need to implement logic for be. start db first:
- cd to project the run
- docker-compose up -d

## env for be:
- DB_URL=mongodb://localhost:27017/testDB
- PORT=(what ever you want)

# how to setup express server with ts?
- setup express server 
- install ts `npm i -D typescript @types/express @types/node`
- generate tsconfig `npx tsc --init`
- we should build when finish and start server with index.js
- so to do that, we need build script `"build": "npx tsc",`
- for developing, we should use `concurently`
- `npm install -D concurrently nodemon`
- then add script: `"dev": "concurrently \"npx tsc --watch\" \"nodemon -q index.js\""`

## Oh shit! I found another way easier for dev mode :)
- `nodemon --watch "*.ts" --exec "ts-node" ./index.ts`