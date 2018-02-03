var boxesLength = [];

var createBox = (length) => {
    $('.container').append('div').css('height', `${length}`);
    boxesLength.push(length);
    _renderBoxes();
}

var _renderBoxes = () => {
    var boxSource = $('#box-template').html();
    var boxTemplate = Handlebars.compile(boxSource);
    for (var i=0; i<boxesLength.length; i++) {
        newHTML = boxTemplate({boxesLength});
        $(`.container`).append(newHTML);
    }
}

$('button').on('click', 'input', function() {
    var length = $(this).val();
    createBox(length);
});