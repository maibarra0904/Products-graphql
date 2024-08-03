export const productsQuerys = {
    getAllProducts: async (_, __, {dataSources} ) => {
            
        const {products} = await dataSources.productsAPI.getAllProducts();       

        return await products;
    },

    getProductById: async (_, {id}, {dataSources}) => {
        return await dataSources.productsAPI.getProductById(id)
    }


}

export const productsMutations = {

}