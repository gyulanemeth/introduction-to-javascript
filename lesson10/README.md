# Exam 1 - Replacement Test

## DOMinate those buttons

Disclamer: in this exercise, you are only allowed to use `var`s and you are not allowed to use `let` and `const`.
If you are not able to accomplish this task, then you are failed on this exam.

Create a program in which you have at least 100 buttons.
Whenever you click on a button, the index of that button should pop up in an alert window.
Every second button should have its index number written on them. The others should have "Other button" written on them.

You have to start from the following code snippet, and you can only write code to the marked section in between those comment lines. Your program has to use the button elements in the buttons array.

```html
<html>
<body>
    <script>
        var buttons = [];
        for(var idx = 0; idx < 100; idx += 1) {
            buttons.push(document.createElement("button"));
        }

        // You can only write code from here
        // You can only write code till this point
    </script>
</body>
</html>
```

## DOMinate your todos

Disclamer:
Use `let` and `const` in this excercise, do not use `var`s.
Structuring your code is good. Please do so. (separate files for css, html and js.)

 - Create a program in which you have at least 100 "cards".
   - each card has a title
   - a status (todo, in-progress, done)
   - and two buttons
 - The initial title of the card
 - Cards can have three states: "To Do", "In Progress" and "Done". Every button's initial state is "To Do".
   - If you click on the "next state" button, it should enter the next state. State transitions are the follwing: "To Do" -> "In progress" -> "Done".
   - If you click on the "prev state" button, it should set the previous state of the card
   - The background color of the card should have something to do with the state. (eg. red, yellow, green)
 - Always save the state of your program.
   - If it's the first time you open your program in the browser, initialize with at least 100 elements.
   - If you reload your browser, the state of your program has to remain the same
 - There should be a "statistics" button in your program. If you click on them, please `alert` a summary of your todos.
   - Sum the number of todos in "To Do", "In progress" and "Done" states.
   - Do not use loops here.


## Proto-Rappers

There are famous rappers around the world creating new styles of hip-hop.
The base style is rap, all of them are derived from this style.

 - Illustrate this evolution using
   - constructor functions,
   - the "class" keyword
   - and the Object.create function.
 - Show how inheritance works in Javascript

Here are some example styles and bands. (You don't have to use them all.)
Don't forget: there are east-side and west-side rappers.

Some example rappers you can use in this excercise: 2pac, ice cube, eminem, dr. dre, 50 cent, dopeman

