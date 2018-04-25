const express = require("express");
const bodyParser = require("body-parser");

const userRouter = require("./userRouter");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/about", (req, res) => {
    res.render("about", {
        title: "This is my Title",
        favProgLangs: [
            "Javascript",
            "Haskell",
            "GY lang"
        ]
    });
});

app.use("/users", userRouter);

app.use("/users/:userId/articles", userRouter);

// GET      /users -> list of users
// GET      /users/:id -> fetch one user
// POST     /users -> create a user
// PUT      /users/:id -> update user (((PATCH /users/:id -> update user partially)))
// DELETE   /users/:id -> remove the user

// /users/:userId/articles
                        // /:id



app.listen(3000, () => console.log("Example app listening on port 3000!"));

