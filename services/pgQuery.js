const db = require("../db");

const getAllFriends = async()=>{
    const {rows} = await db.query("SELECT * FROM friends");
    return rows;
}

module.exports = {
    getAllFriends
}