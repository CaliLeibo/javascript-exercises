const repeatString = function(string, num) {
    let repeats = "";

    if (num < 0){
        return 'ERROR';
    }

    for (let i = 0; i < num; i++){
        repeats += string;
    }
    return repeats;
};

// Do not edit below this line
module.exports = repeatString;
