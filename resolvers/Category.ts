import products from '../datasources/products_data.json' assert { type: 'json' };

const Category = {
  products: (parent) =>
    products.filter((product) => product.categoryId === parent.id),
};

export default Category;
