const success = (req, res, message, status = 200) => {
    res.status(status).send({
        error: false,
        body: message || '',
        status: status,
    });
}
const error = (req, res, message, status = 500) => {
    res.status(status).send({
        error: true,
        body: message || 'Internal server error',
        status: status,
    });
}

export { success, error };