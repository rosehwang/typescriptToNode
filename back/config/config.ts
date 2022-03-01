//const dotenv = require('dotenv'); .ts로 변경 전 .js 시절
import * as dotenv from 'dotenv';
dotenv.config();

type Config = {
  username: "user",
  password: "1234",
  database: "react-nodebird",
  host: "127.0.0.1",
  dialect: "mysql"

const config =  {
  "development": {
    "username": "user",
    "password": "1234",
    "database": "react-nodebird",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "user",
    "password": "1234",
    "database": "react-nodebird",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "user",
    "password": "1234",
    "database": "react-nodebird",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
