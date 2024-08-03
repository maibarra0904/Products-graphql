import {RESTDataSource} from "@apollo/datasource-rest"

export class ProductsAPI extends RESTDataSource {

    override baseURL = "http://localhost:3000/"

    async getAllProducts() {

        const products = await this.get(`/products`)

        return !products ? [] : products
    }

    async getProductById(id: string) {
        const {product} = await this.get(`/products/${encodeURI(id)}`)

        return !product ? {} : product
    }
}