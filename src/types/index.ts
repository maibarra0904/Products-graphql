export const typeDefs = `#graphql


type Product {
    id: ID!
    name: String!
    price: Float!
    stock: Int!
    createdAt: String!
    updatedAt: String!
}

input ProductInput {
    name: String!
    price: Float!
    stock: Int!
}

input ProductUpdate {
    id: ID!
    name: String
    price: Float
    stock: Int
}

type Updated {
    msg: String
}

type Query {
    getAllProducts: [Product]
    getProductById(id: ID!): Product
}

type Mutation {
    createProduct(input: ProductInput!): Product
    updateProduct(input: ProductUpdate!): Updated
}

`;
