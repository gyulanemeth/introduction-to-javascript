# Lesson10

Half of the students writes a replacement test, the other half can proceed with the following excercises.

## Excercise: Trello clone with backend

In these excercises you will have to define express routes and you will have to send HTTP requests to those routes from the client side. You can check the notes from previous lessons to solve these tasks.

### Task1: Save the state of your board on the backend

Create a node application, with a static file server, which serves the previously created trello-clone.

The frontend has to communicate with the backend. Create two routes:
 - the first saves the state of your board (HTTP POST request)
 - the second can be used to load the state of your board (HTTP GET request)
 
You basically have to use these routes to save the state of your board instead of localStorage. The routes above can save the state to a file.

### Task2: Assign boards to users

Modify your application in a way, that you can associate boards to users. The relationship between them should be N-M, meaning that you can assign multiple users to one board, also, one users may have multiple boards.

Tip: you can store users in a file and the boards in another. Both should be JSON files.

On the frontend, the user should be able to enter their username, and their boards should appear in a list. After clicking on one of the list items, the actual board appears.

You don't have to consider security in this excercise.

### Task3: Event based trello-clone

You don't have to code this time, just think about how you'd create a system, where the client-sides are synchronized. For example if a user changes a card on a board, the changes will appear on all of the client programs where users are watching the same board.

You can think about emitting events (basically you send requests to your server) and the server-side multicasts those events, so all of the client-side programs can change their state appropriately. (Broadcasting and multicasting will be hanled with websockets later...)


## Replacement Test1 Results

### Points

Please check the following things in your exam. I might have forgotten to give you some points.

 1) max 2 points
    - Works or not + uses vars only.
    - If you get 0 point to this excercise, then you get 0 to the whole exam.
 2) max 5 points
    - basic functionality with state changes 2 points
    - stats with functional awesomeness (filter, map, reduce, etc.) 1 point
    - load & save state 2 points
 3) max 3 points
    - Creates a nice prototype chain 1 point
    - Uses constructor function properly 0.5 point
    - Uses the class keyword properly 0.5 point
    - Uses Object.create properly 0.5 point
    - Shows the essence of inheritance in JS with function calls. 0.5 points
   

### Grades

 - [0-5)  -> 1
 - [5-6)  -> 2
 - [6-7)  -> 3
 - [7-8)  -> 4
 - [8-9)  -> 5
 - [9-10] -> 5+

### Results

Name                |   neptun  |   #1  |   #2  |   #3  |   Sum | Grade | Comment
---                 | ---       | ---   | ---   | ---   | ---   | ---   | ---
Glavinics Judit     |   WP3QOW  |   2   |   5   |   3   |   10  |   5   |
Leichner Dávid      |   L4AYTB  |   2   |   4   |   9   |   9   |   5   |
Komporday András    |   RNZ4N0  |   2   |   2   |   1   |   5   |   2   |
Szűcs Zoltán        |   O7G8KX  |   2   |   1   |   2   |   5   |   2   |
Lovas Bence         |   I1T2V1  |   2   |       |   3   |       |   2   |
Bogdány Péter       |   HFKG72  |   2   |   1   |   1   |   4   |   1   |
Velegi István       |   ?       |   2   |       |       |       |   1   |


