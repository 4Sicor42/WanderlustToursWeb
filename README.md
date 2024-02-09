# WanderlustTours Web site

[ViewMaket](https://www.figma.com/file/lS1aV3QqjHTJr6sQtvAgKK/Golobe---Travel-agency-website-(Community)?type=design&node-id=9%3A569&mode=design&t=ycsK3huT5qsTsX2M-1)

# Branches

[ViewBranchServer](https://github.com/4Sicor42/WanderlustToursWeb/tree/server)

[ViewBranchClient](https://github.com/4Sicor42/WanderlustToursWeb/tree/client)

# How to install:
### 1. Download Branch Server as a zip and unzip to flodder.
### 2. Download Branch Client as a zip and unzip to flodder.
### 3. Open server floder and find a .env file and you will se:
``` PORT = 5000
DB_NAME=WanderlustToursDB
DB_USER=postgres
DB_PASSWORD=sicor
DB_HOST=localhost
DB_PORT=5432
SECRET_KEY=MJLVLS
```
### 4. Configure env file, like database user, password and etc.
### 5. SECRET_KEY is used for encryption in datebase, so you need to change it for better protection.
### 6. Open terminal and type:
For server floder
```
cd server
npm i
npm run dev
```

For client floder
```
cd client
npm i
npm start
```
### 7. It's running!!