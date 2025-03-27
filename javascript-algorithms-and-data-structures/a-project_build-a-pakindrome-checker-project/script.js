function palindrome(str) {
    let reStr = str.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
    let revStr = reStr.split('').reverse().join('');
    if (reStr == revStr) {
        return true;
    }
    return false;
}

palindrome('2_A3*3#A2');