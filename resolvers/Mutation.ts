import { v4 as uuidV4 } from 'uuid';
import dayjs from 'dayjs';

const Mutation = {
  addCategory: (_parent, { input }, { categories }) => {
    const { name } = input;

    const newCategory = {
      id: uuidV4(),
      name,
    };

    categories.push(newCategory);

    return newCategory;
  },

  addProduct: (_parent, { input }, { products }) => {
    const { name, price, categoryId } = input;

    const newProduct = {
      id: uuidV4(),
      name,
      price,
      categoryId,
    };

    products.push(newProduct);

    return newProduct;
  },

  addReview: (_parent, { input }, { reviews }) => {
    const { title, comment, rating, productId } = input;

    const newReview = {
      id: uuidV4(),
      date: dayjs().format('YYYY-MM-DD'),
      title,
      comment,
      rating,
      productId,
    };

    reviews.push(newReview);

    return newReview;
  },
};

export default Mutation;
