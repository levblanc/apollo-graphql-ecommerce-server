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

export default typeDefs;
