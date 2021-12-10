const platoResolver = {
    Query: {
        listPlatos: async(_, { }, { dataSources }) => {
            data = await dataSources.ventaAPI.getPlatoList();
            data.forEach(plato => {plato.amount = 0});                
            return data
        },
    },
    Mutation: {
        createPlato: async(_, { newPlato } ,{ dataSources, userIdToken } ) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username;
            if ("admin" == usernameToken)
                return dataSources.ventaAPI.createPlato(newPlato);
            else
                return null
        },
        updatePlatoById: async (_, { newPlato, id } ,{ dataSources, userIdToken }) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username;
            if ("admin" == usernameToken)
                return dataSources.ventaAPI.updatePlatoById(newPlato, id.id);
            else
                return null
        },
        deletePlatoById: async (_, { id } ,{ dataSources, userIdToken }) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username;
            if ("admin" == usernameToken)
                return dataSources.ventaAPI.deletePlatoById(id.id);
            else
                return null
        },
    }   
};

module.exports = platoResolver;