var boxesLength = [];

var createBox = (length, a, b, c, colorRGB) => {
    boxesLength.push({length: length, color: {a: a, b: b, c: c}, colorRGB: colorRGB});
    _renderBoxes();
}

var randomColor = () => {
    return Math.floor(Math.random()*255);
}

var _renderBoxes = () => {
    $('.container').empty();
    var boxSource = $('#box-template').html();
    var boxTemplate = Handlebars.compile(boxSource);
    newHTML = boxTemplate({box: boxesLength});
    $(`.container`).append(newHTML);
}

$('.create').on('click', function() {
    var length = $(this).siblings('input').val();
    var a = randomColor();
    var b = randomColor();
    var c = randomColor();
    var colorRGB = a + b + c;
    createBox(length, a, b, c, colorRGB);
});

$('.sort').on('click', function() {
    boxesLength.sort(function(a, b){return a.length - b.length});
    _renderBoxes();
});

$('.shuffle').on('click', function() {
    var temp = [];
    while (boxesLength.length !== 0) {
        temp.push(boxesLength.splice((Math.floor(Math.random()*boxesLength.length)), 1)[0]);
    }
    boxesLength = temp;
    _renderBoxes();
});

$('.sort-color').on('click', function() {
    for (var i=0; i<boxesLength.length; i++) {
        for (var n=0; n<boxesLength.length-1; n++) {
            if (boxesLength[n].colorRGB < boxesLength[n+1].colorRGB) {
                var temp = boxesLength[n];
                boxesLength[n] = boxesLength[n+1];
                boxesLength[n+1] = temp;
            }
        }
    }
    _renderBoxes();
});