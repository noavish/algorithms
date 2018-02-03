// Sort an array in O(n^2)
function sort(array) {
    for (var i=0; i<array.length; i++) {
        for (var n=0; n<array.length; n++) {
            if (array[i] < array[n]) {
                var temp = array[i];
                array[i] = array[n];
                array[n] = temp;
            }
        }
    }
    return array;
}

var points = function() {
    var points = [];
    for (var i=0; i<10; i++) {
        points.push(Math.floor(Math.random()*1000));
    }
    return points;
}

sort(points()).forEach(element => console.log(element));

//Bubble sort
// function sort (array) {
//     for (var i=0; i<array.length; i++) {
//         for (var n=0; n<array.length-1; n++) {
//             if (array[n] < array[n+1]) {
//                 var temp = array[n];
//                 array[n] = array[n+1];
//                 array[n+1] = temp;
//             }
//         }
//     }
//     return array;
// }