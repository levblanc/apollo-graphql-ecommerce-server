const Product = {
  category: ({ categoryId }, _args, { categories }) =>
    categories.find((category) => categoryId === category.id),
  reviews: ({ id }, _args, { reviews }) =>
    reviews.filter((review) => review.productId === id),
};

export default Product;
