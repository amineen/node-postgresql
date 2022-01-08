const env = process.env;
module.exports = {
    db:{
        host:env.DB_HOST,
        port: env.DB_PORT,
        user: env.DB_USER,
        password: env.DB_PASSWORD,
        database: env.DB_NAME
    },
    postgis:{
        host:env.POSTGIS_HOST,
        port: env.DB_PORT,
        user: env.POSTGIS_USER,
        password: env.POSTGIS_PASSWORD,
        database: env.POSTGIS_DB
    }

}