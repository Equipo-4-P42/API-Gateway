const platoResolver = require('./plato_resolver');
const ventaResolver = require('./venta_resolver');
const authResolver = require('./auth_resolver');

const lodash = require('lodash');

const resolvers = lodash.merge(platoResolver, ventaResolver, authResolver);

module.exports = resolvers;