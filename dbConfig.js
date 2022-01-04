const env = process.env;
module.exports = {
    db:{
        host:env.DB_HOST,
        port: env.DB_PORT,
        user: env.DB_USER,
        password: env.DB_PASSWORD,
        database: env.DB_NAME
    }
}