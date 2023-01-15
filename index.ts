import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import products from './datasources/products_data.json' assert { type: 'json' };
import categories from './datasources/categories_data.json' assert { type: 'json' };

const typeDefs = `#graphql
  type Query {
    hello: String
    product(id: ID!): Product
    products: [Product!]!
    category(id: ID!): Category
    categories: [Category!]!
  }
   
  type Product {
    id: ID!
    name: String!
    description: String!
    image: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
  }

  type Category {
    id: ID!
    name: String!
  }
`;

const resolvers = {
  Query: {
    hello: () => 'world',
    product: (_parent, args) => products.find((item) => item.id === args.id),
    products: () => products,
    category: (_parent, args) => categories.find((item) => item.id === args.id),
    categories: () => categories,
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
