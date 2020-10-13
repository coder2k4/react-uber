import {GraphQLSchema} from "graphql"
import {makeExecutableSchema } from "graphql-tools"
import {fileLoader, mergeTypes, mergeResolvers} from "merge-graphql-schemas";
import path from "path";

// Получаем все QUERY & MUTATIONS из файлов graphql
const allTypes: GraphQLSchema[] = fileLoader(path.join(__dirname, "./api/**/*.graphql"))

// Получаем все резолверы
const allResolvers: Record<any, any> [] = fileLoader(path.join(__dirname, "./api/**/*.resolvers.*"))

// Объединяем все QUERY & MUTATIONS
const mergedTypes = mergeTypes(allTypes)

const mergedResolvers = mergeResolvers(allResolvers)

const schema = makeExecutableSchema({
    typeDefs: mergedTypes,
    resolvers: mergedResolvers
})

export default schema