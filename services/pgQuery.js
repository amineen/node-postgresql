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

const getPolesFromPostgisDb = async ()=>{
    const {rows} = await db.queryPostgis(`SELECT * FROM "public"."Poles_1"`);
    return rows;
}
const getResidentialCustomerFromPostgisDb = async ()=>{
    const {rows} = await db.queryPostgis(`SELECT * FROM "public"."Residential_Customers"`);
    return rows;
}
const getBusinessesFromPostgisDb = async ()=>{
    const {rows} = await db.queryPostgis(`SELECT * FROM "public"."Businesses"`);
    return rows;
}

module.exports = {
    getAllFriends,
    getFriendsByLastName,
    getPolesFromPostgisDb,
    getResidentialCustomerFromPostgisDb,
    getBusinessesFromPostgisDb
}