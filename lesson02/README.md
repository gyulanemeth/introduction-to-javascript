# Introduction to the DOM API

The main focus of this lesson is the [DOM API](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model).

"The Document Object Model (DOM) connects web pages to scripts or programming languages. Usually that means JavaScript, but modelling HTML, SVG, or XML documents as objects is not part of the JavaScript language. The DOM model represents a document with a logical tree. Each branch of the tree ends in a node, and each node contains objects. DOM methods allow programmatic access to the tree; with them you can change the document's structure, style or content. Nodes can have event handlers attached to them. Once an event is triggered, the event handlers get executed."

In order to get a good understandin of this lesson, you should be familiar with the basics of HTML and CSS. If you don't have much experience in this topic, I suggest you to read my following blog posts:
 
 - [The Basics of HTML and CSS - Part I.](https://blog.edmdesigner.com/the-basics-of-html-and-css-part-one/)
 - [The Basics of HTML and CSS - Part II.](https://blog.edmdesigner.com/the-basics-of-html-and-css-part-two/)

It is very important to understand the basics of HTML, but after you understand it you might find useful to use HTML frameworks, for example [bootstrap](https://getbootstrap.com/) by Twitter. Also, you might want to use nice [font families](https://fonts.google.com/) and a cool [iconset](https://fontawesome.com/).

It is also very important to build your HTML document in a way that it's [accessible](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML) for visually impaired people. I'm not an expert on this, but hopefully I will be at the end of this course.
 

At the end of this lesson we will see something which has nothing to do with the DOM API. I will show you how we can store the actual state of our application in Local Storage in JSON strings.

## Global Objects in Javascript

Different Javascript environments have different built-in globals. In the browser, the most important ones are:

 - [window](https://developer.mozilla.org/en-US/docs/Web/API/Window)
 - [document](https://developer.mozilla.org/en-US/docs/Web/API/Document)

 These objects provide different APIs. The document object can be found on the window object's document property. The document object is the main entry point of the DOM API.

## Querying DOM Elements

The doument.body is basically the root element of the tree which defines your document. You can run queries on these elements. Probably the two most important ones are:

 - [document.getElementById](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)
 - [document.getElementsByClassName](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName)

There are many more... just fire up your developer toolbar, type document.getEl... and you will see many other functions for querying DOM elements.

## Creating & Manipulating DOM Elements

A DOM document is a tree composed of [DOM Elements](https://developer.mozilla.org/en-US/docs/Web/API/Element) and [DOM Nodes](https://developer.mozilla.org/en-US/docs/Web/API/Node).

Changes in the DOM are automatically reflected in the browser. For example, if you want to change the background of the body:
```javascript
document.body.style.background = "#abcdef";
```

In our example program, we use the following functions to build our todo list:
 - [createElemnt](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
 - [createTextNode](https://developer.mozilla.org/en-US/docs/Web/API/Document/createTextNode)
 - [appendChild](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)

You could set the innerHTML of a certain element, but it is not efficient, because the browser needs to parse the HTML string... Also, it's harder to manipulate your elements if you use innerHTML.

One node can't be in multiple locations in the DOM at the same time. Just try to append - which is already in the document - to another element. It can't be at two places at the same time.

## Event Listeners

Javascript is an event driven programming language. There are tons of different types of [events](https://developer.mozilla.org/en-US/docs/Web/Events) in the browser.

You can react to these events in multiple ways:
 - You can use the [addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) function
 - You can add callbacks to event-related properties, for example [onclick](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick), [onmouseover](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmouseover), etc
 - Similarly, you can use attributes in your HTML. (For example, the [onclick attribute](https://www.w3schools.com/tags/ev_onclick.asp).)

## Frontend Frameworks & Libraries

There are tons of frontend libs and frameworks which can help you to build a bigger application faster, but I truly believe that you have to understand the basics of the DOM API before starting to learn frameworks.

The most popular libs and frameworks recently are:
 - angular
 - react
 - vue

Just google them, you will find tons of materials and tutorials in these topics.

## Other Topics

In our example application, we save the state of the program to [Local Storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) in a [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) string.

You can only store strings in the local storage, but since we can convert our JS objects to JSON strings, it's really not a problem.

