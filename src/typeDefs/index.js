//Se llama al typedef (esquema) de cada submodulo
const platoTypeDefs = require('./plato_type_defs');
const ventaTypeDefs = require('./venta_type_defs');
const authTypeDefs = require('./auth_type_defs');

//Se unen
const schemasArrays = [authTypeDefs, platoTypeDefs, ventaTypeDefs];

//Se exportan
module.exports = schemasArrays;