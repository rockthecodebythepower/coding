const getMoviesCategories = (movies) => {
  const categories = [];

  // movies.forEach(movie => { ... })
  for (let movie of movies) {
    for (let category of movie.categories) {
      const hasCategoryAccumulated = categories.includes(category);

      if (!hasCategoryAccumulated) {
        categories.push(category);
      }
    }
  }

  return categories;
};

const movies = [
  {
    title: 'Bracula: Condemor II',
    duration: 192,
    categories: ['comedia', 'aventura'],
  },
  {
    title: 'Spider-Man: No Way Home',
    duration: 122,
    categories: ['aventura', 'acción'],
  },
  {
    title: 'The Voices',
    duration: 223,
    categories: ['comedia', 'thriller'],
  },
  {
    title: 'Shrek',
    duration: 111,
    categories: ['comedia', 'aventura', 'animación'],
  },
];

const categories = getMoviesCategories(movies);
console.log(categories);
