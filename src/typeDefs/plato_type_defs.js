const { gql } = require('apollo-server');

const platoTypeDefs = gql `
    type Plato {
        id: String
        name_plato: String
        desc_plato: String
        price: Int
        url_img: String
    }

    input PlatoInput {
        name_plato: String!
        desc_plato: String!
        price: Int!
        url_img: String!
    }

    input PlatoIdInput {
        id: String!
    }
    
    type Query {
        listPlatos: [Plato!]
    }

    type Mutation {
        createPlato(newPlato: PlatoInput!): Plato
        updatePlatoById(newPlato: PlatoInput!, id: PlatoIdInput!): Plato
        deletePlatoById(id: PlatoIdInput!): String
    }
    `;
    
module.exports = platoTypeDefs;