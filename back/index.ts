//import  express from 'express';//export default를 가지고 오고 싶으면 이렇게 선언해줘야함.
import * as  express from 'express';//export default가 없으면 이렇게 선언해줘야함.
import { Request, Response, NextFunction, Application} from 'express';
import * as morgan from 'morgan';
import * as cors from 'cors';
import * as cookieParser from 'cookie-parser';
import * as expressSession from 'express-session';
import * as dotenv from 'dotenv';
import * as passport from 'passport';
import * as hpp from 'hpp';
import * as helmet from 'helmet'; 

const app = express();
const prod: boolean  = process.env.NODE_ENV === 'production';

if(prod){
  app.use(hpp());
  app.use(helmet());
  app.use(morgan('combined'));
  app.use(cors({
    origin: /nodebird\.com$/,
    credentials: true,
  }));
}else{
  app.use(morgan('dev'));
  app.use(cors({
    origin: true,
    credentials: true,
  }));
}

app.use('/', express.static('uploads'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(expressSession({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET!,
    cookie: {
      httpOnly: true,
      secure: false, //https -> true 
      domain: prod ? '.nodebird.com' : undefined,      
    },
    name: 'rnbck',
}));
app.set('port', prod ? process.env.PORT : 3065);
//node는 typescript를 실행할 수 없음. 
//개발용에서는  npm i D ts-node
app.get('/', (req, res, next) => {
  res.send('react nodebird 백엔드 정상 동작!');
});
app.listen(app.get('port') , () => {//개발용 포트 3065
  console.log(`server is running on ${app.get('port')}`);
});

