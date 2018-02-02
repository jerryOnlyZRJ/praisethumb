import Koa from 'koa';
import router from 'koa-simple-router';
import render from 'koa-swig';
import CONFIG from './config/config';
import babel_co from 'babel-core/register';
import babel_po from 'babel-polyfill';
import co from 'co';
import serve from 'koa-static';
import initController from './controller/initController';
const app = new Koa();
//引入initController
initController.init(app, router);
//koa2需要co模块
app.context.render = co.wrap(render({
    root: CONFIG.get('viewDir'),
    autoescape: true,
    cache: 'memory', // disable, set to false 
    ext: 'html',
    writeBody: false
}));
app.use(serve(CONFIG.get('staticDir')));
app.listen(CONFIG.get('port'));