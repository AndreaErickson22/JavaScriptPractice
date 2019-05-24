// function multiply(num1, num2) {
//   var arr = []
//   while (num2 > 0) {
//     arr.push(num1)
//     num2--
//   }
//   console.log(arr);
//   var sum;
//   sum= arr.reduce((acc, e))
// }

function multiply(num1, num2) {
  let product = 0;
  for (let i = 0; i < num2; i++) {
    product += num1;

  }
  console.log(product)
}
const output = multiply(2, 8);
console.log();