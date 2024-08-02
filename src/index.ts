import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";


const typeDefs = `#graphql
type Query {
    hello: String
}

`
const resolvers = {
    Query: {}
}

const server = new ApolloServer({ typeDefs, resolvers });

// Inicia el servidor
async function startServer() {
    const {url} = await startStandaloneServer(server, {
        listen: {
            port: 4000
        }
    });
    console.log(`🚀 Servidor Apollo listo en ${url}`);
}

startServer();