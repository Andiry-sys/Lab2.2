let _array1 = [];

let _array2 = [];

let _array3 = [];

function Print(array) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element);
  }
}

function Enter(array) {
  for (let i = 0; i < 5; i++) {
    let a = Math.round(Math.random() * 100);
    array.push(a);
  }
}

function arrayUnique(array) {
  let a = array.concat();
  for (let i = 0; i < a.length; ++i) {
    for (let j = i + 1; j < a.length; ++j) {
      if (a[i] === a[j]) a.splice(j--, 1);
    }
  }

  return a;
}

function Arrays2(array1, array2) {
  let array = [];
  for (let i = 0; i < array1.length; i++) {
    for (let j = i + 1; j < array2.length; j++) {
      if (array1[i] == array2[j]) {
        array.push(array1[i]);
      }
    }
  }
  return array;
}

function Arrays3(array1, array2) {
  let array = [];
  for (let i = 0; i < array1.length; i++) {
    for (let j = i + 1; j < array2.length; j++) {
      if (array1[i] != array2[j]) {
        array.push(array1[i]);
      }
    }
  }
  return array;
}

Enter(_array1);
Enter(_array2);
//1
_array3 = arrayUnique(_array1.concat(_array2));
console.log("First");
Print(_array3);
//2
_array3 = Arrays2(_array1, _array2);
console.log("Second");
Print(_array3);
//3
_array3 = Arrays3(_array1, _array2);
console.log("Third");
Print(_array3);
