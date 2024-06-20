const reverseString = function(string) {
    let reverse = "";

    for (let i = 1; i < string.length+1; i++){
        reverse += string.at(string.length-i);
    }
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
