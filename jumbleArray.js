var colors = ["red", "indigo", "white", "teal", "yellow"];
var foods = ["bread", "cheese", "cucumber"];

function jumble(arr1, arr2){
    var arr3 = arr1.concat(arr2);
    var jumbledArr = [];
    while (arr3.length>0) {
        jumbledArr.push(arr3.splice((Math.floor(Math.random()*arr3.length)), 1)[0]);
    }
    return jumbledArr;
}

console.log(jumble(colors, foods)) 