const reverseString = function(string) {


    const arr = string.split("")

    const reversedArr = arr.reverse()
    
    let toString = reversedArr.join('')
   
    
   return toString
    
};

// Do not edit below this line
module.exports = reverseString;
