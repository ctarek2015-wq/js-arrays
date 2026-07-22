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
