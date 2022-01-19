let _fruits = ["apples", "oranges", "mango", "cherry", "peach", "banana"];
_fruits.sort();
let html = "<ul>";
_fruits.forEach(function (item, i, array) {
  html += "<li>" + item + "<li>";
});
html += "<ul>";
document.write(html);

let _fruit = prompt(`Enter name fruist`);

function Search(name, fruits) {
  let pos = fruits.indexOf(name);
  if (pos >= 0) {
    pos++;
    alert(pos);
  } else {
    alert(-1);
  }
}

Search(_fruit, _fruits);
