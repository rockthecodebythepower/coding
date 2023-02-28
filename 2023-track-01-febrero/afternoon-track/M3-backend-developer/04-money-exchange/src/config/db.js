import mongoose from 'mongoose';

mongoose.set('strict', false);
mongoose.set('strictQuery', false);
mongoose.set('strictPopulate', false);

const USERNAME = process.env.DB_USER;
const PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = 'money-exchange-db';

mongoose
  .connect(
    `mongodb+srv://${USERNAME}:${PASSWORD}@rockthemongo.kkf4buu.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to DB', err);
  });
