import { productsQuerys } from "./products.resolver";

export const resolvers = {
    Query: {
        ...productsQuerys
    }
};