# Lesson1: The Very Basics of Javascript

In the first lesson we discovered the basics of Javascript. It's the most popular programming language at the moment, you can use it in browsers but also on the server side.

I suggest you to follow two people. The first is the Arnold Schwarzenegger of Javascript. His name is [Douglas Crockford](https://en.wikipedia.org/wiki/Douglas_Crockford). Search for his presentations on Youtube, they are awesome.
The second person to follow is Mattias Petter Johansson (mpj), who has a great [Youtube channel](https://www.youtube.com/channel/UCO1cgjhGzsSYb1rsB4bFe4Q) about Javascript and software development in general.

The standard of Javascript is called [ECMAScript](https://en.wikipedia.org/wiki/ECMAScript). It's continuously evolving. In the ES6/ES2015 standard, you can find many, many useful features, but unfortunately there are some which should not be used in my opinion. (For example "classes".)

In the following sections I am not going to write a lot, I rather share some great links which you can follow to learn more about the concepts. Most of the things in this lesson can be done with the developer tools of Chrome. I will share some snippets which you can copy & paste there to figure out how these things work in JS.

## Exploring the Type System in Javascript

https://developer.mozilla.org/hu/docs/Web/JavaScript/Guide/Control_flow_and_error_handling
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures


[typeof operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof) to determine the type of primitives or objects.

You can check out the return value of the examples below in Chrome's developer toolbar's console or in a Node.js console.
 ```javascript
//numbers - there are no integers!
typeof 3;
typeof 0.4;

//booleans
typeof true;
 
//strings
typeof "hello world";

//objects
typeof {};

//arrays are also objects
typeof [];

//null is also an object
typeof null;

//undefined
typeof undefined;

//typeof always returns a string
typeof typeof false;

//functions
typeof function() {}

```

[instanceof operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof)

```javascript
//arrays are objects.
typeof [];

//but they are the instances of Array
[] instanceof Array;

//there are other object types as well, for example the Date
new Date() instanceof Date;
```

We are going to explore Javascript's object system and inheritance in the third lesson. Be tuned! ;)

[comparision operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)

```javascript
//implicit type conversion with ==
3 == "3" //returns true

//no type conversion
3 === "3" //returns false

//truthy/falsy values
3 || true || false //returns 3
"" || {} || false //returns {}
null || undefined || 0 || false || [] //returns []
```

## Variables
globals - do NOT use globals.

```javascript
x = "my global variable";
//this variable is accessible through the global object as well!
window.x;
x;
```
**var** declares a function scoped variable
```javascript
//if you are not inside a function, it will be a global variable
var x = "my function scoped variable";
window.x;

function testFunction() {
    var y = "it's really bound to the function";
}

testFunction();

y; //Uncaught ReferenceError: y is not defined


//function scoped variables are visible even outside the block they were defined. It is also called hoisting.
function testFunction2() {
    if (true) {
        var x = "inside an if";
    }
    console.log(x);

    for (var idx = 0; idx < 3; idx += 1) {
        console.log(idx);
    }
    console.log("I can see you here as well!!!", idx);
}

testFunction2();
```

**let** (ES2015) declares a block scoped variable
```javascript
function testFunction3() {
    if (true) {
        let x = "inside an if";
    }
    console.log(x); //error
}

function testFunction4() {
    for (let idx = 0; idx < 3; idx += 1) {
        console.log(idx);
    }
    console.log("I can see you here as well!!!", idx); //error
}

testFunction3();
testFunction4();
```
 
**const** (ES2015) declares a constant

 ```javascript
const x = 3;
x = 4; //Uncaught TypeError: Assignment to constant variable.
```

## Objects

In this lesson we will only cover the basics of objects. As I mentioned earlier, the whole third lesson is dedicated to this topic.

Objects are composed of key-value pairs, where the keys are strings the values can be any JS values. (Except symbol.)

```javascript
let obj = {};
let obj2 = {
    prop1: "xyz",
    prop2: function() {
        console.log(obj2.prop1);
    }
};

//you can add new props to objects
obj.testProp = 42;

//and you can remove props
delete obj.testProp;


//objects are reference types, so the === comparision compares the references
let obj3 = {
    a: "x"
};

let obj4 = {
    a: "x"
};

obj3 === obj4; //false

//cou can iterate over the keys of objects
for (let prop in obj) {
    console.log(prop, obj[prop]);
}
```

## Arrays

You can store any types of values in [Javascript arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array). They have many useful array functions, for example:
 - push,
 - pop,
 - unshift
 - shift
 - slice
 - splice
 - indexOf

```javascript
//a simple example
let testArray = ["x", 4];
testArray.push({});

for (let idx = 0; idx < testArray.length; idx += 1) {
    console.log(testArray[idx]);
}
```

## Functions

You have already created some functions, but I will show you some simple examples here. The fourth lesson will be an deepdrive into Javascript functions. You will love it.

```javascript
function x() {

}

//you can also store functions in variables
const y = function() {

}

//the neat new arrow function syntax in ES2015
const z = param => console.log("This is an arrow function", param);
```

## Joke of the day

```javascript
defined;
```