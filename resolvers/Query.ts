const Query = {
  product: (_parent, { id }, { products }) =>
    products.find((product) => product.id === id),
  products: (_parent, __args, { products }) => products,
  category: (_parent, { id }, { categories }) =>
    categories.find((parent) => parent.id === id),
  categories: (_parent, __args, { categories }) => categories,
};

export default Query;
