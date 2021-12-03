const ventaResolver = {
    Query: {
        getVentaByUsername: async (_, { username } ,{ dataSources, userIdToken }) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username;
            if (username.username == usernameToken)
                return dataSources.ventaAPI.getVentaByUsername(username.username)
            else
                return null
        },
    },
    Mutation: {
        createNewVenta: async (_, { infoVenta } ,{ dataSources, userIdToken }) => {
            userToken = await dataSources.authAPI.getUser(userIdToken);
            const ventaInput = {
                username: userToken.username,
                full_name: userToken.name,
                email: userToken.email,
                phone: userToken.phone,
                address: userToken.address,
                platoList: infoVenta
            };
            return await dataSources.ventaAPI.createVenta(ventaInput);
        },
    }
};


module.exports = ventaResolver;