const sumAll = function(a,b) {
    if (a < 0 || b < 0 || typeof a != 'number' || typeof b != 'number'){
        return 'ERROR';
    }

    let totalSum = 0;
    if (b > a){
        let i = 1;
        totalSum += b;
        while ((b-i) >= a){
            totalSum += (b-i);
            i++;
        }
    }
    else {
        let i = 1;
        totalSum += a;
        while ((a-i) >= b){
            totalSum += (a-i);
            i++;
        }
    }
    console.log(totalSum);
    return totalSum;
};


// Do not edit below this line
module.exports = sumAll;
