const { gql } = require('apollo-server');

const ventaTypeDefs = gql `
    type Plato {
        id: String!
        name_plato: String
        desc_plato: String
        price: Int
        amount: Int!
        url_img: String
    }

    type Venta {
        id: String!
        username: String!
        full_name: String!
        email: String!
        phone: String!
        address: String!
        transaction_date: String!
        total_bill: Int!
        platoList: [Plato]!
    }

    input NewVentaInput {
        id: String!
        amount: Int!
    }

    input UsernameInput {
        username: String!
    }

    type Query {
        getVentaByUsername(username: UsernameInput!): [Venta] 
    }

    type Mutation {
        createNewVenta(infoVenta: [NewVentaInput!]!): Venta
    }
    `;

module.exports = ventaTypeDefs;