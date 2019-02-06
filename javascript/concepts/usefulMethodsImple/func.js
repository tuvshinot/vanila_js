function isAlphaNumeric(char) {
    var code = char.charCodeAt(0);

    if(!(code > 47 && code < 58) && !(code > 64 && code < 91) && !(code > 96 && code < 123)) {
        // 0-9                       // upper alpha A-Z            // lower Alpha a -z 
        return false;
    }
    return true;
}

function isAlphaNumericRegExp(str) {
    return /^[a-zA-Z0-9]+$/.test(str); // slower than above
}