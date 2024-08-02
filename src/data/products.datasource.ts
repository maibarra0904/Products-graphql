import {RESTDataSource} from "@apollo/datasource-rest"

export class ProductsAPI extends RESTDataSource {

    override baseURL = "http://localhost:3000/"

    async getAllProducts() {

        const products = await this.get(`/products`)

        return !products ? [] : products
    }
}