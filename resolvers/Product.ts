const Product = {
  category: ({ categoryId }, _args, { db }) =>
    db.categories.find((category) => categoryId === category.id),
  reviews: ({ id }, _args, { db }) =>
    db.reviews.filter((review) => review.productId === id),
};

export default Product;
