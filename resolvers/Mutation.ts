import { v4 as uuidV4 } from 'uuid';
import dayjs from 'dayjs';

const Mutation = {
  addCategory: (_parent, { input }, { db }) => {
    const { name } = input;

    const newCategory = {
      id: uuidV4(),
      name,
    };

    db.categories.push(newCategory);

    return newCategory;
  },

  addProduct: (_parent, { input }, { db }) => {
    const { name, price, categoryId } = input;

    const newProduct = {
      id: uuidV4(),
      name,
      price,
      categoryId,
    };

    db.products.push(newProduct);

    return newProduct;
  },

  addReview: (_parent, { input }, { db }) => {
    const { title, comment, rating, productId } = input;

    const newReview = {
      id: uuidV4(),
      date: dayjs().format('YYYY-MM-DD'),
      title,
      comment,
      rating,
      productId,
    };

    db.reviews.push(newReview);

    return newReview;
  },
};

export default Mutation;
