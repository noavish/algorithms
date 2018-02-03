// first solution
// function reverse(str){
//     var reversed = [];
//     var res = str.split('');
//     while (res.length !== 0) {
//         reversed.push(res.pop());
//     }
//     return reversed.join('');
// }

// second solution
// function reverse(str) {
//     return str.split('').reverse().join('');    
// }

// third solution
function reverse(str) {
    var reversed = '';
    for (var i = str.length - 1; i >= 0; i--)
      reversed += str[i];
    return reversed;
  }

console.log(reverse("dog")); //should return "god"
console.log(reverse("race car")); //should return "rac ecar"