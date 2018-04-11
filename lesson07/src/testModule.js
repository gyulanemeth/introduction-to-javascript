const fs = require("fs");

module.exports = {
    testFunction: () => {
        console.log("yoooooooo");
    },
    readme: () => {
        fs.readFile("../README.md", "utf8", (err, data) => {
            console.log(data);
        });
    }
};