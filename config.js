export default {
    api: {
        port: process.env.API_PORT || 8000
    },
    post: {
        port: process.env.POST_PORT || 8001
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
        host: process.env.MYSQL_SRV_HOST || 'localhost',
        port: process.env.MYSQL_SRV_PORT || 3001,
    },
}