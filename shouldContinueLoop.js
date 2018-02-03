var array = ["first", "second", "third" , "last"];

var shouldIContinue = (array) => {
    for (var i=0; i<array.length; i++) {
        var reply = prompt('should I continue?');
        if (reply == 'no') {
            return;
        }
        console.log(array[i]);
        if (i == array.length-1) {
            i = -1;
        }
    }
}

shouldIContinue(array);