# Creating a Trello-clone With Local Storage


Composition over inheritance
https://www.youtube.com/watch?v=wfMtDGfHWpA


Desctructuring

https://developer.mozilla.org/hu/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment


Analize the product we want to recreate. (A part of it.)
What do we want to achieve later?


What are the things in our app?
Board...
 - title
 - domElement
 - children (columns)
 - create board
 - addChild
Columns in board...
 - title
 - domElement
 - children (cards)
 - create column
   - create object representation
   - add object to an array (parent board's children array)
   - create DOM element, append to parent
 - addChild
 - copyTo
Cards in columns...
 - title
 - domElement
 - create card
   - create object representation
   - add object to an array (parent column's children array)
   - create DOM element, append to parent
 - copyTo

Dnd cards...
Dnd Columns
 - Move from to
   - remove descriptor object from an array
   - add it to another array to a certain place
   - move dom element from a place to another
  - what about copy to...
    - board, column, index
 - Copy from to?
   fromArray, toArray, fromIndex, toIndex


Add card
Add column
 - add descriptor object to array
 - add dom element to a parent element

Remove card
Remove column
 - remove document descriptor from array
 - remove dom element from dom

Save State to Local Storage