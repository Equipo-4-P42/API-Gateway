const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../server');

class VentaAPI extends RESTDataSource {

    constructor() {
        super();
        this.baseURL = serverConfig.ventas_api_url;
    }

    async createPlato(plato) {
        plato = new Object(JSON.parse(JSON.stringify(plato)));
        return await this.post('/post/platos', plato);
    }

    async getPlatoList() {
        return await this.get(`/get/platos`);
    }

    async updatePlatoById(plato, id) {
        plato = new Object(JSON.parse(JSON.stringify(plato)));
        return await this.put(`/update/platos/${id}`, plato);
    }

    async deletePlatoById(id) {
        return await this.delete(`/delete/platos/${id}`);
    }

    async createVenta(venta) {
        venta = new Object(JSON.parse(JSON.stringify(venta)));
        return await this.post('/post/ventas', venta);
    }

    async getVentaByUsername(username) {
        return await this.get(`/get/ventas/${username}`);
    }

}

module.exports = VentaAPI;