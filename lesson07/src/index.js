const fs = require("fs");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
    console.log(req);
    res.send("Hello World! aséldkfjasdféklj");
    console.log(res);
});

app.get("/:fileName", (req, res) => {
    fs.readFile(req.params.fileName, "utf8", (err, data) => {
        res.send(data);
    });
});

app.post("/:fileName", (req, res, next) => {
    if(req.params.fileName === "atom.anti") {
        return res.status(403).send();
    }
    next();
}, (req, res) => {
    console.log(req.body);
    fs.writeFile(req.params.fileName, JSON.stringify(req.body), "utf8", (err) => {
        console.log(`file ${req.params.fileName} written.`);

        res.send("done.");
    });
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));
