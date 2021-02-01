const routes = require('express').Router();

const get = require('../../../controllers/user/get');
const create = require('../../../controllers/user/create');
const update = require('../../../controllers/user/update');
const remove = require('../../../controllers/user/delete');

routes.get('/:id', get);
routes.post('/', create);
routes.put('/:id', update);
routes.delete('/:id', remove);

module.exports = routes;