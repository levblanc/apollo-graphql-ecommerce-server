const Category = {
  products: ({ id }, { filter }, { products }) =>
    products.filter((product) => {
      if (product.categoryId === id) {
        if (filter && filter.onSale) {
          return product.onSale;
        } else {
          return product;
        }
      }
    }),
};

export default Category;
