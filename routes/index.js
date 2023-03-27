const comprasRouter = require('./comprasRouter');


function routerApi(app){
    app.use('/compras', comprasRouter);
}

module.exports = routerApi;