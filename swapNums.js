var swapNums = (x, y) => {
    if (x>y) {
        var dif = x-y;
        x = x-dif;
        y = y+dif;        
    } else if (x<y) {
        var dif = y-x;
        x = x+dif;
        y = y-dif;
    } 
    console.log(x,y);
}

swapNums(4, 5);

