const express = require('express');
require("dotenv").config();
const cors = require("cors")
const { getAllFriends, getFriendsByLastName } = require("./services/pgQuery");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.status(200).json({
        msg: "Welcome to API testing postgresql",
        version: "0.0.1",
        developer: "Aaron Mineen",
        github: "https://github.com/amineen/node-postgresql"
    })
})

app.get("/friends", async (req, res) => {
    try {
        const friends = await getAllFriends();
        res.status(200).json({
            status: "success",
            data: friends,
            count: friends.length
        })
    } catch (error) {
        res.status(500).json({ msg: "Server error" });
    }

});

app.get("/friends/:lastName", async (req, res) => {
    try {
        const {lastName} = req.params;
        const friends = await getFriendsByLastName(lastName);
        res.status(200).json({
            status: "success",
            data: friends,
            count: friends.length
        })
    } catch (error) {
        res.status(500).json({ msg: "Server error", details: error.message });
    }

});

PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
