const leapYears = function(year) {

    // if params are divisible by 4 then it is a leap year
    // but years divisible by 100 are not leap years unless they are also divisible by 400
    //
    
     
  if (year % 100 === 0 && year % 400 === 0) {
    return true
    }
   
    if (year % 4 === 0 && year % 100 === 0) {
    
    return false
    }
    else if (year % 4 || 400 === 1) {
            return false
    }
    else {
    return true
    }
    
    };
// Do not edit below this line
module.exports = leapYears;
