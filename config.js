export default {
    api: {
        port: process.env.API_PORT || 8000
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'notasecret!'
    },
    mysql: {
        host: process.env.MYSQL_HOST || 'localhost',
        user: process.env.MYSQL_USER || 'jhoncode',
        password: process.env.MYSQL_PASS || 'password',
        database: process.env.MYSQL_DB || 'nodejsPlatzi'
    },
    mysqlService: {
        port: process.env.MYSQL_SRV_PORT || 3001,
    },
}