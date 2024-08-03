import { RESTDataSource } from "@apollo/datasource-rest"

export class ProductsAPI extends RESTDataSource {

    override baseURL = "http://localhost:3000/"

    async getAllProducts() {

        const products = await this.get(`/products`)

        return !products ? [] : products
    }

    async getProductById(id: string) {
        const { product } = await this.get(`/products/${encodeURI(id)}`)

        return !product ? {} : product
    }

    async createProduct(name: string, price: number, stock: number) {
        const {product} = await this.post(`/products`, {
            body: {
                name,
                price,
                stock
            }
        })

        return product
    }

    async updateProduct(id: string, name?: string, price?: number, stock?: number) {

        if (!name &&!price &&!stock) {
            throw new Error("At least one field must be updated")
        }

        const productToUpdate = await this.get(`/products/${encodeURI(id)}`)

        if (!productToUpdate) {
            throw new Error("Product not found")
        }

        const body = {
            name: name || productToUpdate.name,
            price: price || productToUpdate.price,
            stock: stock || productToUpdate.stock
        }


        await this.patch(`/products/${encodeURI(id)}`, {
            body
        })

        return {msg: `Product with id ${encodeURI(id)} updated`}
    }
}