export const typeDefs = `#graphql


type Product {
    id: ID!
    name: String!
    price: Float!
    stock: Int!
    createdAt: String!
    updatedAt: String!
}

type Query {
    products: [Product]
}
`;