const typeDefs = `#graphql
  type Query {
    product(id: ID!): Product
    products(filter: ProductsFilter): [Product!]!
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
    reviews: [Review!]!
  }

  input ProductsFilter {
    onSale: Boolean
    avgRating: Int
  }

  type Category {
    id: ID!
    name: String!
    products(filter: ProductsFilter): [Product!]!
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
