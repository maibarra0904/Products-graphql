export const resolvers = {
    Query: {

        products: async (_, __, {dataSources} ) => {
            
            const {products} = await dataSources.productsAPI.getAllProducts();       

            

            return await products;
        }
    }
};