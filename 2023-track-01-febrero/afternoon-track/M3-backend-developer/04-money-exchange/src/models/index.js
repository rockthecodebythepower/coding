import mongoose from 'mongoose';

const emptySchema = new mongoose.Schema({});
export const User = mongoose.model('User', emptySchema);
