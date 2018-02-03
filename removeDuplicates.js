var arr = ["dog", "cat", "camel", "bee", "dog", "elephant", "dolphin"];

function removeDup (arr) {
    var obj = {};
    for (var i=0; i<arr.length; i++) {
        if (arr[i] in obj) {
            arr.splice(i, 1);
        } else {
            obj[arr[i]] = 1;
        }
    }
    return arr;
}

console.log(removeDup(arr));