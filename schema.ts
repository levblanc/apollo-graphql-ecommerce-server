const typeDefs = `#graphql
  type Query {
    product(id: ID!): Product
    products(filter: ProductsFilter): [Product!]!
    category(id: ID!): Category
    categories: [Category!]!
  }

  type Mutation {
    addCategory(input: AddCategoryInput!): Category! 
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
    products(filter: ProductsFilter): [Product!]!
  }

  type Review {
    id: ID!
    date: String!
    title: String!
    comment: String!
    rating: Int!
  }

  input ProductsFilter {
    onSale: Boolean
    avgRating: Int
  }

  input AddCategoryInput {
    name: String!
  }
`;

export default typeDefs;
