import { v4 as uuidV4 } from 'uuid';

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
};

export default Mutation;
