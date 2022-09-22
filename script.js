
simpleArray = [1,2,3,4,5,6,7,8,9];
stringArray = ['hi', 'bye', 'hello', 'goodbye'];

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

stringArray = ['hi', 'bye', 'hello', 'goodbye'];
function showFirstAndLast(arr) {
    let newArray = [];
    console.log('aye');
    arr.forEach(function(str) {
        newArray.push(str[0] + str[str.length - 1]);
    });
    return newArray;
};

console.log(showFirstAndLast(stringArray));

let names = [
    {name: 'Elie'},
    {name: 'Tim'},
    {name: 'Matt'},
    {name: 'Colt'}
];

function addKeyAndValue(arr, key, value) {
    arr.forEach( Object => {
        Object[key] = value;
    });
    console.log(arr);
    return arr;
}

addKeyAndValue(names, 'title', 'instructor');