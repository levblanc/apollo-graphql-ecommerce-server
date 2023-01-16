const typeDefs = `#graphql
  type Query {
    product(id: ID!): Product
    products: [Product!]!
    category(id: ID!): Category
    categories: [Category!]!
    reviews: [Review!]!
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
    reviews: [Review!]!
  }

  type Category {
    id: ID!
    name: String!
    products: [Product!]!
  }

  type Review {
    id: ID!
    date: String!
    title: String!
    comment: String!
    rating: Int!
  }
`;

export default typeDefs;
