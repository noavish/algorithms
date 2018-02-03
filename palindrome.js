var isPalindrome = (str) => {
    var strArr = str.split('');
    for (var i=0; i<strArr.length; i++) {
        if (strArr[i] === ' ') {
            strArr.splice(i, 1);
        }
    }
    str = strArr.join('');
    console.log(str);
    while (str !== '') {
        if (str[0] !== str[str.length-1]) {
            return false;
        }
        str = str.slice(1, str.length-1);
    }
    return true;
}

console.log(isPalindrome('holkjloh'));
console.log(isPalindrome('holkloh'));
console.log(isPalindrome('taco cat'));