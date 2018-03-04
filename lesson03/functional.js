function test() {
    if (test.language === "French") {
        return console.log("Omlette de fromauge");
    }

    console.log("Pörkölt");
}

test.language = "French";

let test2 = test;

test();
test.language = "Something else";
test2();

function invokeCounterCreator() {
    let count = 0;
    function invokeCounter() {
        count += 1;
        console.log("count:", count);
    }

    return invokeCounter;
}

const invCounter = invokeCounterCreator();

invCounter();
invCounter();
invCounter();

function forEach(array, callback) {
    for(let idx = 0; idx < array.length; idx += 1) {
        callback(array[idx]);
    }
}

function map(array, callback) {
    const mappedArray = [];
    for(let idx = 0; idx < array.length; idx += 1) {
        mappedArray.push(callback(array[idx]));
    }
    return mappedArray;
}

const testArray = [
    {
        name: "Jani",
        age: 3,
        skills: []
    },
    {
        name: "Magda",
        age: 27,
        skills: ["js", "sql"]
    },
    {
        name: "eminem",
        age: 42,
        skills: ["talking very fast", "survive bullets"]
    }
];

//forEach(testArray, console.log);
/*
forEach(testArray, function(person) {
    let name = person.name;
    if (name === "eminem") {
        name += " dat rapper";
    } else {
        name += " a normal person";
    }
    console.log(name);
});

const mappedPeople = map(testArray, function(person) {
    let name = person.name;
    if (name === "eminem") {
        name += " dat rapper";
    } else {
        name += " a normal person";
    }
    return name;
});
*/
//forEach(mappedPeople, console.log)

const concatPpl = testArray.map(person => {
    let name = person.name;
    if (name === "eminem") {
        name += " dat rapper";
    } else {
        name += " a normal person";
    }
    return name;
}).join(" --- ");

console.log(concatPpl);


const sumOfAges = testArray
    .map(person => person.age)
    .reduce((sum, act) => sum + act, 0);

const sumOfAges2 = testArray
    .map(function(person) {
        return person.age;
    })
    .reduce(function(prevValue, currentValue) {
        return prevValue + currentValue;
    }, 0);

console.log("Sum of ages: ", sumOfAges, sumOfAges2);

console.log(testArray
    .filter(person => person.age > 10)
    .filter(person => person.name === "eminem")
);

function yopp(idx) {
    return function() {
        console.log("idx", idx);
    }
}
function varTest() {
    var arrayOfFunctions = [];
    for(var idx = 0; idx < 10; idx += 1) {
        arrayOfFunctions.push(yopp(idx));
    }

    for(var idx2 = 0; idx2 < arrayOfFunctions.length; idx2 += 1) {
        arrayOfFunctions[idx2]();
    }
}

varTest();

const myAwesomeModule = (function() {
    let secret = "yopp";
    console.log("myFunction", secret);

    return {
        awesomeness: function() {
            console.log("awesomeness");
        }
    };
}());

myAwesomeModule.awesomeness();






