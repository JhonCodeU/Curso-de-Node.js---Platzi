export default {
    api: {
        port: process.env.API_PORT || 8000
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'notasecret!'
    }
}