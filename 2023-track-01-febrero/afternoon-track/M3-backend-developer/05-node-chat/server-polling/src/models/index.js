import mongoose from 'mongoose';

const emptySchema = new mongoose.Schema({});

// {
//   _id: string,
//   username: string,
//   text: string,
//   createdAt: Date | string
// }

export const Message = mongoose.model('Message', emptySchema);

// Algunos métodos de fechas con JS:
// const date = new Date();
// console.log(date);
// console.log(date.toISOString());
// console.log(date.toUTCString());

// const now = Date.now()
// console.log(now)
