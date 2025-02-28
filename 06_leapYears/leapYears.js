const leapYears = function(year) {
    if (year % 400 === 0) return true;
        else if (year % 100 !== 0 && year % 0 === 0) return true;
        else return false;
};


console.log(leapYears(2100));
// Do not edit below this line
module.exports = leapYears;
