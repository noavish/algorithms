var cipher = (str, secret) => {
    var secret1 = secret.split('').map(x => (x.charCodeAt(0)-96));
    
    var encrypted = '';
    for (var i=0; i<str.length; i++) {
        encrypted += String.fromCharCode(str[i].charCodeAt(0)+secret1[i%secret1.length]);
    }
    return encrypted;
}

console.log(cipher("elephant", "cab"));
