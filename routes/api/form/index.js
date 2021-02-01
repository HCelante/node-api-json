const routes = require('express').Router();

const get = require('../../../controllers/form/get');
const create = require('../../../controllers/form/create');
const update = require('../../../controllers/form/update');
const remove = require('../../../controllers/form/delete');

routes.get('/:id', get);
routes.post('/', create);
routes.put('/:id', update);
routes.delete('/:id', remove);

module.exports = routes;