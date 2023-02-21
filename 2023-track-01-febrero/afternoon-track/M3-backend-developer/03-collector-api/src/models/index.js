import mongoose from 'mongoose';

const emptySchema = new mongoose.Schema({});

export const Movie = mongoose.model('Movie', emptySchema);
export const Book = mongoose.model('Book', emptySchema);

// Gracias a usar "type": "module" en package.json podemos exportar con export y no con esto 🔽
// module.exports = {
//   Movie,
//   Book
// }
