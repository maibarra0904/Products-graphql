import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import {typeDefs} from "./types/index"
import {resolvers} from "./resolvers/index"
import { ProductsAPI } from "./data/products.datasource";


const server = new ApolloServer({ typeDefs, resolvers });

// Inicia el servidor
async function startServer() {
    const {url} = await startStandaloneServer(server, {
        listen: {
            port: 4000
        },
        context: async () => {
            const {cache} = server

            return {
                dataSources: {
                    productsAPI: new ProductsAPI({cache})
                }
            }
        }
    });
    console.log(`🚀 Servidor Apollo listo en ${url}`);
}

startServer();