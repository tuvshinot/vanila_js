// ==========================================================================================================================================
// ==========================================================================================================================================
// +++++++++ swapping arr or function values+++++++++++++++++++
function swap(a, b) {
    var temp = a;
    a = b;
    b = temp;

    return [a, b];
}

/// using destructring
function swapDestr(a, b) {
    return [a, b] = [b, a];
}

function swappingArrElPairs(arr) {
    for (let i = 0; i < arr.length; i+=2) {
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
    }
    return arr;
}


// ==========================================================================================================================================
// ==========================================================================================================================================
// +++++++++ Foreach +++++++++++++++++++
Array.prototype.forEach1 = function(arr, func) {
    for (let index = 0; index < arr.length; index++) {
        func(arr[index], index, arr);
    }
};

// ==========================================================================================================================================
// ==========================================================================================================================================
// +++++++++ map +++++++++++++++++++
Array.prototype.map1 = function(arr, func) {
    var newArr = [];
    for (let index = 0; index < arr.length; index++) {
        newArr.push(func(arr[index], index, arr)); // push result of the call back!!!
    }
    return newArr;
};


// ==========================================================================================================================================
// ==========================================================================================================================================
// +++++++++ filter +++++++++++++++++++
Array.prototype.filter1 = function(arr, func) {
    var newArr = [];

    for (let index = 0; index < arr.length; index++) {
        if(func(arr[index], index, arr)) {
            newArr.push(arr[index]);
        } 
    }
    return newArr;
};

var arr = [1, 2, 3];

arr.filter1(function(value) {
    return value => 2;
});

function belowTwo(arr) {
    return arr.filter1(function(value) {
        return value === 2;
    });
};

// ==========================================================================================================================================
// ==========================================================================================================================================
// +++++++++ Some +++++++++++++++++++
Array.prototype.some1 = function(arr, func) {
    for (let index = 0; index < arr.length; index++) {
        if(func(arr[index], index, arr)) {
            return true;
        }
    }
    return false;
}

function hasEven(arr) {
    return arr.some1(function(value) {
        return value % 2 === 0;
    });
};

// ==========================================================================================================================================
// ==========================================================================================================================================
// +++++++++ Every +++++++++++++++++++
Array.prototype.every1 = function(arr, func) {
    for (let index = 0; index < arr.length; index++) {
        if(!func(arr[index], index, arr)) {
            return false;
        }
    }
    return true;
}
 
// EX : 
function allLowerCase(str) {
    return str.split('').every1(function(value) {
        return value === value.toLowerCase();
    });
};


// ==========================================================================================================================================
// ==========================================================================================================================================
// +++++++++ Reduce +++++++++++++++++++


//EX:
var arr1 = [1, 2, 3, 4];
arr1.reduce(function(acc, nextvalue){
    // acc = 10; nextvalue = 1
}, 10);

arr1.reduce(function(acc, nextvalue){
    return acc+nextvalue; // sum
});


//EX:
arr1.reduce(function(acc, nextvalue){
    // acc = 1; nextvalue = 2
});


//EX:
var arrNames = ['tim', 'colt', 'elie'];
arrNames.reduce((acc, nextvalue) => {
    return acc += ' ' + nextvalue;
}, 'My favorite instructors are '); // this string is initial value of acc


//EX:
var arr2 =[1, 2, 3, 4, 1, 1];
arr2.reduce((acc, nextvalue) => {
    if(nextvalue in acc) {
        acc[nextvalue]++;  // that is after acc.nextvalue = incremented num will be value;
    } else {
        acc[nextvalue] = 1;
    }

    return acc;
}, {});


//EX:
const sumOddNums = arr => {
    return arr.reduce((acc, nextvalue) => {
        if(nextvalue % 2 !== 0) {
            acc += nextvalue;
        } 
        return acc;
    }, 0);
}


//EX:
var arrOfNames = [{first:'colt', last:'tim'},{first:'jim', last:'jimmy'}]; // first one is key
const createFullName = arr => {
    return arr.reduce((acc, nextvalue) => {
        acc.push(nextvalue.first + ' ' + nextvalue.last);
        return acc;
    }, []);
}


// EX Partition element to arrays
const partitionEls = (arr, func) => {  // returns array of arrays two different 

    return arr.reduce((acc, next) => {
        if(func(next)) {
            acc[0].push(next);
        } else {
            acc[1].push(next);
        }

        return acc;

    }, [[], []]);
}

// EX count vowels in reduce
function vowelsCount(str) {
    var vowels = "aeiou";
    return str.split('').reduce(function(acc, next) {
        if(vowels.indexOf(next.toLowerCase() !== -1)) {
            if(next in acc) {
                acc[next]++;
            } else {
                acc[next] = 1;
            }
        }

        return acc;
    }, {});
}
