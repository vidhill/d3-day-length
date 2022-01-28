const handler = async () => {
    return {
        statusCode: 200,
        body: 'Hello World Updated',
    };
};

module.exports = {
    handler,
};
