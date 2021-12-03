const { gql } = require('apollo-server');

const authTypeDefs = gql `
    type Tokens {
        refresh: String!
        access: String!
    }

    type Access {
        access: String!
    }

    input CredentialsInput {
        username: String!
        password: String!
    }

    input SignUpInput {
        username: String!
        password: String!
        name: String!
        email: String!
        address: String!
        phone: String!
    }

    type UserDetail {
        id: Int!
        username: String!
        password: String!
        name: String!
        email: String!
        address: String!
        phone: String!
        id_superuser: Boolean
    }
    
    type Mutation {
        signUpUser(userInput :SignUpInput): Tokens!
        logIn(credentials: CredentialsInput!): Tokens!
        refreshToken(refresh: String!): Access!
    }

    type Query {
        userDetailById(userId: Int!): UserDetail!
    }
`;

module.exports = authTypeDefs;