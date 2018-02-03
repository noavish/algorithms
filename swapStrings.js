var swapString = (x, y) => {
    var num = x.length;
    x += y;
    y = x.slice(0, num);
	x = x.substring(num, x.length);
    console.log(x,y);
}
swapString('noa', 'avi');