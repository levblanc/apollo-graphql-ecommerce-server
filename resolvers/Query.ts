const Query = {
  product: (_parent, { id }, { products }) =>
    products.find((product) => product.id === id),
  products: (_parent, { filter }, { products }) => {
    if (filter && filter.onSale) {
      return products.filter((product) => product.onSale);
    }

    return products;
  },
  category: (_parent, { id }, { categories }) =>
    categories.find((parent) => parent.id === id),
  categories: (_parent, __args, { categories }) => categories,
};

export default Query;
// "filter": {
//   "onSale": true
// },
