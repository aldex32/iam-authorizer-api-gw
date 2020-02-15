'use strict';

module.exports.hello = async event => {
    console.log('Received event', event);

    return {
        statusCode: 200,
        body: 'Hello world'
    };
};
