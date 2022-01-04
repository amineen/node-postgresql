const {Pool} = require("pg");
const dbConfig = require("./dbConfig");
const pool = new Pool(dbConfig.db);

const query = async(query)=>{
    const {rows, fields} = await pool.query(query);
    return {rows, fields};
};

module.exports = {
    query
}