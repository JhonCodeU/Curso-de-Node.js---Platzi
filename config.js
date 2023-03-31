export default {
    remoteDB: process.env.REMOTE_DB || false,
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
        host: process.env.MYSQL_HOST || '',
        user: process.env.MYSQL_USER || 'jhoncode',
        password: process.env.MYSQL_PASS || 'password',
        database: process.env.MYSQL_DB || 'nodejsPlatzi'
    },
    mysqlService: {
        host: process.env.MYSQL_SRV_HOST || 'localhost',
        port: process.env.MYSQL_SRV_PORT || 3001,
    },
    cacheService: {
        host: process.env.CACHE_SRV_HOST || 'localhost',
        port: process.env.CACHE_SRV_PORT || 3002,
    },
    redis: {
        host: 'redis-server',
        port: 6379,
        password: 'password',
    }
}