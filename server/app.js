import Koa from 'koa'
import Router from 'koa-router'
import parser from 'koa-bodyparser';
import cors from 'koa2-cors'
import api from './routes/api'
import routes from './routes/index'
import mongoConnection from './db/connection';

const app = new Koa();

app
  .use(cors())
  .use(parser())
  .use(api(Router))
  .use(routes(Router));
  
  
(async ()=>{
  try {
    await mongoConnection();
  } catch (e) {
    console.error('ERROR:', e);
    return;
  }
  app.listen(3011, '47.52.5.137', ()=>{
    console.log('47.52.5.137: 3011 server listen');
  });
})();