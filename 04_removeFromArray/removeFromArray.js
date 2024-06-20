const removeFromArray = function(array, ...theArgs) {

    const totalArgs = [];
    const newArray = [];
    for (const args of theArgs){
        totalArgs.push(args);
    }

    console.log(totalArgs);

    outer: for (const arr of array){
        for (const total of totalArgs){
            if (total === arr){
                continue outer;
            }   
        }        
        newArray.push(arr);
    }
    console.log(newArray);
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
