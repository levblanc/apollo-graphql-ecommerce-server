const Query = {
  product: (_parent, { id }, { products }) =>
    products.find((product) => product.id === id),
  products: (_parent, { filter }, { products, reviews }) => {
    if (filter) {
      const { onSale, avgRating } = filter;

      if (onSale && !avgRating) {
        return products.filter((product) => product.onSale);
      }

      if (!onSale && avgRating) {
        if (![1, 2, 3, 4, 5].includes(avgRating)) {
          console.log('>>>>> Error: avgRating not valid', avgRating);
          return [];
        }

        return products.filter((product) => {
          let ratingSum = 0;
          let ratingCount = 0;

          reviews.forEach((review) => {
            if (product.id === review.productId) {
              ratingSum += review.rating;
              ratingCount++;
            }
          });

          const avg = ratingSum / ratingCount;

          return avg >= avgRating;
        });
      }
    }

    return products;
  },
  category: (_parent, { id }, { categories }) =>
    categories.find((parent) => parent.id === id),
  categories: (_parent, __args, { categories }) => categories,
};

export default Query;
