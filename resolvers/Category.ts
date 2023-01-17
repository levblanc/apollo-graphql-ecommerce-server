const Category = {
  products: ({ id }, { filter }, { db }) =>
    db.products.filter((product) => {
      if (product.categoryId === id) {
        if (filter) {
          const { onSale, avgRating } = filter;

          if (onSale && !avgRating) {
            return product.onSale;
          }

          if (!onSale && avgRating) {
            if (![1, 2, 3, 4, 5].includes(avgRating)) {
              console.log('>>>>> Error: avgRating not valid', avgRating);
              return [];
            }

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
          }
        }

        return product;
      }
    }),
};

export default Category;
