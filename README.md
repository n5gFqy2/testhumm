# Set Up

 1. Clone o Projeto 
 2. install npm **npm i**

# TEST 

> **npm run test**

# RUN Local 

> **npm run start**

# RUN Docker 

> **docker-compose -f "docker-compose.yml" up -d --build**

# API 

## Login

POST http://localhost:3000/login

{
    "username": "",
    "password": ""
}
## createUser

POST http://localhost:3000/createUser

-H "x-access-token" : "token"

{
  "accountId": "b0f663a1-a235-4d88-8d65-573caaa2c952",
  "username": "14",
  "password": "14",
  "email": "4@4",
  "status": "active",
  "permissions": [
    {
      "accountId": "b0f663a1-a235-4d88-8d65-573caaa2c952",
      "roles": [
        "admin"
      ]
    }
  ]
}

## userList

GET http://localhost:3000/userList?accountId="xxx"

-H "x-access-token" : "token"


