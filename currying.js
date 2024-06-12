function add(a, b) {
  return a + b;
}

// console.log(add(2, 3));

function curriedAdd(x) {
  return function (y) {
    return x + y;
  };
}

const addTwo = curriedAdd(2)

console.log(addTwo(3))

console.log(curriedAdd(2)(3));