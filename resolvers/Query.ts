const Query = {
  product: (_parent, { id }, { db }) =>
    db.products.find((product) => product.id === id),
  products: (_parent, { filter }, { db }) => {
    if (filter) {
      const { onSale, avgRating } = filter;

      if (onSale && !avgRating) {
        return db.products.filter((product) => product.onSale);
      }

      if (!onSale && avgRating) {
        if (![1, 2, 3, 4, 5].includes(avgRating)) {
          console.log('>>>>> Error: avgRating not valid', avgRating);
          return [];
        }

        return db.products.filter((product) => {
          let ratingSum = 0;
          let ratingCount = 0;

          db.reviews.forEach((review) => {
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

    return db.products;
  },
  category: (_parent, { id }, { db }) =>
    db.categories.find((parent) => parent.id === id),
  categories: (_parent, __args, { db }) => db.categories,
};

export default Query;
