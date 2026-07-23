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

let tasks = [];
function addTask(task) {
  tasks.push(task);
  console.log(`Added task: ${task}`);
}
function listTasks() {
  console.log("To-Do List:");
  for (let i = 0; i < tasks.length; i++) {
    console.log(`${i + 1}. ${tasks[i]}`);
  }
}
function removeTask(index) {
  if (index >= 0 && index < tasks.length) {
    console.log(`Removed: ${tasks[index]}`);
    tasks.splice(index, 1);
    // tasks.pop();
  }
}
// Demo
addTask("Learn JS basics");
addTask("Build a mini project");
listTasks();
removeTask(0);
listTasks();

console.log(movies);
console.log("=========================");
const msg = "my favourite movie is";

function printMsg(movie) {
  return `My favorite movie is ${movie}`;
}

for (let idx = 0; idx < movies.length; idx++) {
  const movie = movies[idx];
  console.log(printMsg(movie));
}

console.log("=========================");

for (let movie of movies) {
  console.log(printMsg(movie));
}

console.log("=========================");

movies.forEach(printMsg);

movies.forEach(function (movie) {
  console.log(`${msg}: ${movie}`);
});

movies.forEach((movie) => {
  console.log(movie);
});

console.log("=========================");

movies.forEach((movie, index) => {
  if (index === 2) console.log("that is it");
  console.log(index + 1 + "-" + movie);
});

const alphaBet = "abcd";
console.log(alphaBet.split(""));

console.log("=========================");

const books = ["The Shining", "Pride and Prejudice"];
console.log(books[1]);
for (book of books) {
  console.log(book);
}

books.forEach(function (book, index) {
  console.log(index + book);
});

const nums = [1, 2, 3, 4, 5];
let total = 0;
nums.forEach(function (num) {
  total += num;
});
console.log(total);

function max5(nr1, nr2, nr3, nr4, nr5) {
  const nums = [nr1, nr2, nr3, nr4, nr5];
  nums.sort();
  return nums.at(-1);
}

console.log(max5(5, 1, 9, 7, 6));
