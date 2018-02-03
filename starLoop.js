var starLoop = () => {
    var num = Math.floor(Math.random()*100);
    var star = '';
    for (var i=0; i<num; i++) {
        star += '*';
        console.log(star);
    }
    for (var i=num; i>0; i--) {
        star = star.substring(0, star.length-1);
        console.log(star);
    }
}

starLoop();