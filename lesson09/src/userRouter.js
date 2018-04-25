const express = require("express");
const router = express.Router({mergeParams: true});

router.get("/", (req, res) => {
    console.log(req.path);
    res.json({});
});

router.get("/:id", (req, res) => {
    console.log(req.path);
    res.json(req.params);
});

router.post("/", (req, res) => {
    console.log(req.path);
    res.json({});
});

router.put("/:id", (req, res) => {
    console.log(req.path);
    res.json({});
});

router.delete("/:id", (req, res) => {
    console.log(req.path);
    res.json({});
});

module.exports = router;