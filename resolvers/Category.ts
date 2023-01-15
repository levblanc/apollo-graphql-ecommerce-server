const Category = {
  products: ({ id }, _args, { products }) =>
    products.filter((product) => product.categoryId === id),
};

export default Category;
