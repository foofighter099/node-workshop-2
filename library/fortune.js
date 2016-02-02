module.exports = function getFortune(){
    var myArray = ['Random fortune','you will have a great week','good luck is headed your way','that was not chicken'];
    console.log(myArray[Math.floor(Math.random() * myArray.length)]);
};