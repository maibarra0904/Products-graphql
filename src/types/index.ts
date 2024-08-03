export const typeDefs = `#graphql


type Product {
    id: ID!
    name: String!
    price: Float!
    stock: Int!
    createdAt: String!
    updatedAt: String!
}

type ProductInput {
    name: String!
    price: Float!
    stock: Int!
}

type Query {
    getAllProducts: [Product]
    getProductById(id: ID!): Product
}

input CreateProductInput {
  name: String!
  price: Float!
  stock: Float!
}

type Mutation {
    createProduct(input: CreateProductInput!): Product
}

`;
