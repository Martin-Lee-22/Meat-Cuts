import { ApolloServer } from "@apollo/server";
import {startStandaloneServer} from "@apollo/server/standalone";    
import { readFileSync } from "fs";
import { resolvers } from "./resolvers.js";

const typeDefs = readFileSync('./src/schema.graphql', {encoding:'utf-8'});

// server setup
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const {url} = await startStandaloneServer(server, {
    listen: {port: 4000},
});

console.log('Server ready at port', url);