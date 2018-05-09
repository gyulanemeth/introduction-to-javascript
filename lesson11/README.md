# Exam2

## Task0 - 0 points

Disclamer: in this exercise, you are only allowed to use `var`s and you are not allowed to use `let` and `const`.
If you are not able to accomplish this task, then you are failed on this exam.

You can use Node.js to test your program.

```javascript
var functions = [];
for (var idx = 0; idx < 10; idx += 1) {
    //you can only modify the code from here
    functions.push(function () {
        //you mustn't modify the body of this function!
        console.log(idx + " yo");
    });
    //you can only modify the code till here
}

for (var idx2 = 0; idx2 < functions.length; idx2 += 1) {
    functions[idx2]();
}
```

Expected output:

0 yo
1 yo
2 yo
3 yo
4 yo
5 yo
6 yo
7 yo
8 yo
9 yo

## Task1: Minimal Stock-photo app. (Max. 7 points)

Create a Node.js app. When you send me the zip file, please remove the node_modules folder.

### Server images - 1 point
Create a Node.js server, which serves images from a folder. Use the static middleware. For example, if you have an "imgs" folder, your node server should serve the the files in the following way:
 - http://localhost:3000/imgs/xyz.png
 - http://localhost:3000/imgs/xyz.jpg
 - etc...

Please put some real images there, so it will be easier to follow everything.

### Pages & partials - 2 points

Create an about page and a listing page. Both of them should use the same header for navigation. (Use partials.)
In the header there has to be a link to the about page and the listing page.
The route of the about page has to be: /about
The route of the listing page has to be: /


### Listing page & image page - 2 points

Let's say that we have our database in a file. An example is:
[
    {
        "author": "xy",
        "url: "http://localhost:3000/xyz.jpeg",
        "title: "yooooo",
        "tags": ["blue", "nice"],
        "price": 3
    },
    {
        "author": "xy2",
        "url: "http://localhost:3000/xyz.jpeg",
        "title: "yooooo3",
        "tags": ["blue", "not-nice"],
        "price": 2
    },
    {
        "author": "xy",
        "url: "http://localhost:3000/xyz.jpeg",
        "title: "yooooo4",
        "tags": ["red", "nice"],
        "price": 5
    }
]

The listing page should show you a list with the titles of the images. If you click on it, it has to forward you to the image page.

The images should have pages on which you show all of the metadata about them. Also, include the image itself on the page.
Example routes for these pages:
 - /stock-images/yooooo
 - /stock-images/yooooo4

Meaning, the route has to end with the title.

### Tag pages - 2 points

Create pages with which you can filter your database. Put a link to your stock-image pages which will direct you to these tag listings.

Example route:

/tags/red




## Task2: Sending and processing requests (max. 6 points)

For all of the subtasks below, please create a separate folder. For example:
 - Task2/a
 - Taks2/b
 - etc...

### A - 1 point
Fetch the content of a website and count a certain expression in the resulting HTML. Use XMLHttpRequest.

What you are searching for and the webpage in which you are searching, should come from two text inputs.
Show the result in the DOM.

### B - 1 point
Fetch the content of a website and count a certain expression in the resulting HTML. Use the fetch API, but no async await this time.

What you are searching for and the webpage in which you are searching, should come from two text inputs.
Show the result in the DOM.

### C - 1 point
Create the same thing with async await... (Use the fetch API.)

What you are searching for and the webpage in which you are searching, should come from two text inputs.
Show the result in the DOM.

### D - 1 point

Search for certain expressions in multiple (an array of websites). Use Promise.all and the fetch API.

With Promise.all, you can synchronize promises -> Don't show the results until everything is finished.

What you are searching for and the webpage in which you are searching, should come from two text inputs.
You can use comma (,) to separate the websites in your input for the websites.
Show the result in the DOM.

### E - 2 points

Do it on the server side. Use the node-fetch library. (It defines the very same interface as fetch.)
Send the info in a HTTP POST request.

Data to send:

{
    "searchFor": "asdf",
    "websites": ["https://index.hu", "https://origo.hu"]
}

Note: If you haven't completed the previous task, then it's enough to send only one website.

