var encrypt = (str) => {
    var encrypt = '';
    var temp = [];
    for (var i=0; i<str.length; i++) {
        encrypt += String.fromCharCode(str[i].charCodeAt(0)+1);
    }
    return encrypt;
}

console.log(encrypt('abc'));

var decrypt = (str) => {
    var decrypt = '';
    for (var i=0; i<str.length; i++) {
        decrypt += String.fromCharCode(str[i].charCodeAt(0)-1);
    }
    return decrypt;
}
console.log(decrypt(encrypt('abc')));