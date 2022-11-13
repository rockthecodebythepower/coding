let heroes = [
  {
    id: 1,
    name: 'Superman',
    age: 45,
    alias: 'Clark Kent'
  },
  {
    id: 2,
    name: 'Batman',
    age: 55,
    alias: 'Bruce Wayne'
  },
  {
    id: 3,
    name: 'Wonder Woman',
    age: 2000,
    alias: 'Diana'
  },
  {
    id: 4,
    name: 'Green Latern',
    age: 30,
    alias: 'Jal Jordan'
  },
  {
    id: 5,
    name: 'Aquman',
    age: 48,
    alias: 'Arthur Curry'
  }
]

export const getHeroes = () => heroes;

export const getHeroe = id => heroes.find(
  heroe => heroe.id.toString() === id
)

export const deleteHeroe = async (id) => heroes = heroes.filter(
  heroe => heroe.id !== id
)