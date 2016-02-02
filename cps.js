/*//Using what you read, re-write your function from the Basic JavaScript workshop that returns the first character of a string using CPS
function firstChar(str, ret){
    ret(str.slice(0,1));
}
//Use the newly created function to show that you understand the concept
firstChar('Andrew', function(str){
    console.log(str);
});
//Create a CPS function that returns the last character of a string
function lastChar(str, ret){
    ret(str.slice(str.length - 1));
}
//Use the newly created function to show that you understand the concept
lastChar('Andrew', function(str){
    console.log(str);
});*/
//Create a function that takes a string and a continuation (callback)
//Your function should use the two previous functions you created to "return" a string that contains both the first and last character of the initial string
function getFirstAndLast(newStr, callback){
    callback(String(newStr[0]) + String(newStr.slice(-1)));
}

getFirstAndLast("hello", function(newStr) { 
    console.log(newStr); 
});