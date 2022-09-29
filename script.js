
simpleArray = [1,2,3,4,5,6,7,8,9];
stringArray = ['hi', 'bye', 'hello', 'goodbye'];
/*
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




function vowelCount(str) {
    let splitArr = str.split("");
    let obj = {};
    const vowels = "aeiou";
  
    splitArr.forEach(function(letter) {
      let lowerCasedLetter = letter.toLowerCase()
      if (vowels.indexOf(lowerCasedLetter) !== -1) {
        if (obj[lowerCasedLetter]) {
          obj[lowerCasedLetter]++;
        } else {
          obj[lowerCasedLetter] = 1;
        }
      }
    });
    return obj;
  }

  console.log(vowelCount('Elie'));


  //----------------->
//      MAP
  //----------------->

  function doubleValuesWithMap(arr) {
    return arr.map (function(val) {
        return val * 2;
    });
  }

  console.log(doubleValuesWithMap(simpleArray));

  function valTimesIndex(arr) {
    return arr.map(function(val, i) {
        return val * arr[i];
    });
  }
  console.log(valTimesIndex(simpleArray));

  function extractKey(arr, key) {
    return arr.map(function(val) {
        return val[key];
    });
  }

  console.log(extractKey(
    [
      {name: 'Elie'},
      {name: 'Tim'},
      {name: 'Matt'},
      {name: 'Colt'}
    ],
    'name'
  ));


  function extractFullName(arr) {
    return arr.map(function(val) {
      return val.first + " " + val.last;
    });
  }

  console.log(extractFullName([
    {first: 'Elie', last:"Schoppik"},
    {first: 'Tim', last:"Garcia"},
    {first: 'Matt', last:"Lane"},
    {first: 'Colt', last:"Steele"}
  ]));

  function filterByValue(arr, cat) {
    return arr.filter(function(val){
      if (val[cat] !== undefined) {
        return val;
      }
    });
  };

  console.log(filterByValue(
    [
      {first: 'Elie', last:"Schoppik"},
      {first: 'Tim', last:"Garcia", isCatOwner: true},
      {first: 'Matt', last:"Lane"},
      {first: 'Colt', last:"Steele", isCatOwner: true}
    ],
    'isCatOwner'
    ));



function find(arr, num) {
  return arr.filter(function(val){
    return val === num;
  });
};

console.log(find([1,2,3,4,5], 3));
console.log(find([1,2,3,4,5], 10));


function findInObj(arr, key, val) {
  return arr.filter(function(val){
    return val[key] !== undefined;
  });
};

console.log(findInObj(
  [
    {first: 'Elie', last:"Schoppik"},
    {first: 'Tim', last:"Garcia", isCatOwner: true},
    {first: 'att', last:"Lane"},
    {first: 'Colt', last:"Steele", isCatOwner: true}
  ],
  'isCatOwner',
  true
));

*/
function removeVowels(string) {
  string.split('a', 'e').join('');
};

console.log()
