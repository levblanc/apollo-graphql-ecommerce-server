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
    category: Category
  }

  type Category {
    id: ID!
    name: String!
    products: [Product!]!
  }
`;

const resolvers = {
  Query: {
    hello: () => 'world',
    product: (_parent, args) =>
      products.find((product) => product.id === args.id),
    products: () => products,
    category: (_parent, args) =>
      categories.find((parent) => parent.id === args.id),
    categories: () => categories,
  },
  Category: {
    products: (parent) =>
      products.filter((product) => product.categoryId === parent.id),
  },
  Product: {
    category: (parent) =>
      categories.find((category) => parent.categoryId === category.id),
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
