const {Pool} = require("pg");
const dbConfig = require("./dbConfig");
const pool = new Pool(dbConfig.db);
const postGisPool = new Pool(dbConfig.postgis);
const query = async(query)=>{
    const {rows, fields} = await pool.query(query);
    return {rows, fields};
};
const queryPostgis = async(query)=>{
    const {rows, fields} = await postGisPool.query(query);
    return {rows, fields};
};


module.exports = {
    query,
    queryPostgis
}