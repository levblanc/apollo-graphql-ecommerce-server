import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import typeDefs from './schema';
import resolvers from './resolvers';
import products from './datasources/products_data.json' assert { type: 'json' };
import categories from './datasources/categories_data.json' assert { type: 'json' };

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  context: async () => {
    return {
      products,
      categories,
    };
  },
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
