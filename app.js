const movies = [
  "aBeautifulMind",
  "theGodFather",
  "gladiator",
  "theTerminal",
  "theIntern",
];
console.log(movies);
const first = function () {
  return 0;
};
console.log(movies[first()]);

console.log(movies[movies.length - 1]);

movies.push("theMatrix");
console.log(movies);

movies.pop();
console.log(movies[0]);
const removedMovie = movies.pop();
console.log(removedMovie);
console.log(movies, movies.length);

const colors = ["red", "green", "blue"];
let color = colors[1];

console.log(color);

for (let idx = 0; idx < movies.length; idx++) {
  console.log(movies[idx]);
}
