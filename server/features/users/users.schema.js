import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: String,
    logo: String,
    socketId: String,
  });

export const User = mongoose.model('User', userSchema);
