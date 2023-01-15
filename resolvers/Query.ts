import products from '../datasources/products_data.json' assert { type: 'json' };
import categories from '../datasources/categories_data.json' assert { type: 'json' };

const Query = {
  product: (_parent, args) =>
    products.find((product) => product.id === args.id),
  products: () => products,
  category: (_parent, args) =>
    categories.find((parent) => parent.id === args.id),
  categories: () => categories,
};

export default Query;
