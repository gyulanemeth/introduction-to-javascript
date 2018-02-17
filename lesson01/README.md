# Lesson1: Variables, types and Values in Javascript

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

## Objects

## Arrays
 - push, pop, unshift, shift
 - slice, splice


## Functions

## Declaring Variables
 - globals
 - var
 - let (ES2015)
 - const (ES2015)