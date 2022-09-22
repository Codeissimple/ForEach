
simpleArray = [1,2,3,4,5,6,7,8,9];

function doubleValues(arr) {
    let newArray = [];
    arr.forEach(function(val) {
        newArray.push(val *2);
    });
    return newArray;
}

console.log(doubleValues(simpleArray));

function onlyEvenValues(arr) {
    let newArray = [];
    arr.forEach(function(val) {
        if(val % 2 == 0){
            newArray.push(val);
        }
    });
    return newArray;
};

console.log(onlyEvenValues(simpleArray));

showFirstAndLast(arr) {
    let newArray = [];
    arr.forEach(function(val) {
        
    })
}
