const dummyData = [
    {
        dummy1: 'Cat',
    },
    {
        dummy2: 'dog',
    },
];

const headers = {
    'Content-Type': 'application/json',
};

const handler = async () => {
    return {
        statusCode: 200,
        headers,
        body: JSON.stringify(dummyData),
    };
};

module.exports = {
    handler,
};
