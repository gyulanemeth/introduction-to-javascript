# Object Creation in Javascript

https://www.youtube.com/watch?v=GhbhD1HR5vk&list=PL0zVEGEvSaeHBZFy6Q8731rcwk0Gtuxub

## The "this" Keyword

The "this" keyword normally refers to the object on which the function was invoked.

```javascript
awesomeProperty = 42;

function testingThis() {
    console.log(this.awesomeProperty);
}

testingThis();
```

In the example above the "this" keyword meant the global scope (global object) because it was called on the global object. (Every globally declared function/variable will be the property of the global object.)


```javascript
let testing = {
    awesomeProperty: 1337
};

testing.yo = testingThis;

testing.yo();
```

In the example above we added our function to an object and we invoked it. From the output, you can see that this is referring to the object on which the function is invoked.

On top of these, you can also override the meaning of the "this" keyword with the following functions:
 - [bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
 - [apply](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
 - [call](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)

[Arrow functions](https://developer.mozilla.org/hu/docs/Web/JavaScript/Reference/Functions/Arrow_functions) have lexical scoping for this, which also means that you are not able to override this within arrow functions (with apply or call).

## Prototypes

Inheritance in Javascript is prototype-based, which means that **objects inherit from objects**. There are no classes in JS.

If you refer to a property on a JS object, for example you try to call `testObj.awesomeFunction()`, then the JS engine will check out if there is any `awesomeFunction` on `testObj`. If there is, then that function will be used. If there is no `awesomeFunction` on our object, then it checks the prototype of the object (which is usually referred through the __proto__ property). It goes up on the prototype chain until it finds the `awesomeFunction` property. If the prop is not found in the prototype chain, then the JS engine will look for `awesomeFunction` on the global scope (the global object - which is the window in browsers).

## Constructor Functions

Some Java-maniac had the crazy idea in the 90's to make JS similar to Java. They thought there should be similar keywords (for example "new" and "this") so they wanted to introduce a similar object-creation method.

You can create so-called "constructor functions" which you can use together with the "new" keyword to create objects.

```javascript
function Rapper(name) {
    this.name = name;
}

Rapper.prototype = {
    speakFast: function() {
        console.log("I'm " + this.name + " yigiriyo!");
    },
    shootGuns: function() {
        console.log("BANG");
    }
};

const eminem = new Rapper("eminem");
```

`Rapper.prototype` will be the prototype of the object which are create with the `new Rapper("xyz")` expression. The following expression will be true:

```javascript
Rapper.prototype === eminem.__proto__;
```

Eminem basically inherited some functionality from the rapper prototype object. If you re-write the code above, it will be much more visible:

```javascript
const rapperProto = {
    speakFast: function() {
        console.log("I'm " + this.name + " yigiriyo!");
    },
    shootGuns: function() {
        console.log("BANG");
    }
};

function Rapper(name) {
    this.name = name;
}

Rapper.prototype = rapperProto;

const eminem = new Rapper("eminem");
```

You can also create new subtypes of rappers...
```javascript
function EastSideRapper(name) {
    this.name = name;
}

EastSideRapper.prototype = new Rapper("yopp");
EastSideRapper.prototype.dealHappiness = function() {
    console.log("Gimme dat cash");
};
```

Someone recently had the great idea to introduce an even more similar syntax to classical OOP languages. Now, you can create "classes" which is just a syntax sugar for the thing above...

```javascript
class WestSideRapper extends Rapper {
    constructor(name) {
        super();
        this.name = name;
    }

    beingNice() {
        console.log("Ima pimp yo.");
    }
}
```

If you check the type of `WestSideRapper` you will see that it's a function...

To be honest I think it's one of the worst ideas to make Javascript's syntax more similar to classical OOP languages, because it will lead to confusion and misunderstanding. I really discourage to use this syntax. I can even go further... You rarely need to use inheritance at all. Please watch [this video](https://www.youtube.com/watch?v=wfMtDGfHWpA&t=) about composition over inheritance. 

---

To understand the connection between the built-in types, it's worth to check out the following figure:

![Prototypes in Javascript](http://www.mollypages.org/tutorials/jsobj_full.jpg)


## Object.create

[Object.create](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create) is a function with which you can create a new object and set its prototype. It was introduced by the [Arnold Schwarzenegger of Javascipt](https://en.wikipedia.org/wiki/Douglas_Crockford) and it clearly shows that in JS objects inherit from objects (their prototypes).

```javascript
const dopeman = Object.create(rapperProto, {name: {
    value: "dopeman"
}});
dopeman.speakFast();
```

You can also create factory methods to create objects. Please check out the source code we created during the lesson.


## Other Useful Object Functions
 - Object.keys
 - Object.freeze
 - Object.assign
 - Object.defineProperty --- try to define setters and getters!


