const repeatString = function(string, num) {
    let rStr = string

    if (num === 0) {
        return ""
    }
    else if (num < 0) {
        return 'ERROR'
    }
    else {
    for (let i = 1; i < num; i++) {
         rStr += string
    }
}
    return rStr
};

// Do not edit below this line
module.exports = repeatString;
