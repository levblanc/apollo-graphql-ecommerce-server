import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import products from './datasources/products_initial.json' assert { type: 'json' };

const typeDefs = `#graphql
  type Query {
    hello: String
    products: [Product!]!
  }
   
  type Product {
    name: String!
    description: String!
    image: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
  }
`;

const resolvers = {
  Query: {
    hello: () => 'world',
    products: () => products,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  // context:async () => {
  //   return {
  //     dataSources: {
  //       reviewsAPI: new ReviewsAPI(),
  //     }
  //   }
  // },
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
