import { User } from '../users/users.schema.js';

export const addUser = async (user) => {
    const newUser = new User(user);
    return await newUser.save();
  };
  
export  const getUsers = async () => {
    return await User.find();
  };
  
  export const removeUser = async (userId) => {
    return await User.findByIdAndDelete(userId);
};
