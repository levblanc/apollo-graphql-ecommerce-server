const Product = {
  category: ({ categoryId }, _args, { categories }) =>
    categories.find((category) => categoryId === category.id),
};

export default Product;
