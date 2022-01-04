const db = require("../db");

const getAllFriends = async()=>{
    const {rows} = await db.query("SELECT * FROM friends");
    return rows;
}

const getFriendsByLastName = async(lastName)=>{
    const {rows} = await db.query(`
    SELECT * FROM friends
    WHERE lastname='${lastName}'`);
    return rows;
}

module.exports = {
    getAllFriends,
    getFriendsByLastName
}