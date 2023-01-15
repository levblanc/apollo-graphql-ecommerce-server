import categories from '../datasources/categories_data.json' assert { type: 'json' };

const Product = {
  category: (parent) =>
    categories.find((category) => parent.categoryId === category.id),
};

export default Product;
