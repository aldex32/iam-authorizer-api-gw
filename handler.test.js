'use strict';

const aws4 = require('aws4');
const requestPromise = require('request-promise-native');
const {URL} = require('url');
const {expect} = require('chai');

// TODO: Set your own AWS access key
const accessKeyId = 'TODO';
const secretAccessKey = 'TODO';

describe('handler#hello', () => {

    // TODO: Set your generated endpoint from cloud formation
    const endpoint = 'TODO';
    const url = new URL(endpoint);

    it('should call the service successfully by signing the request', async () => {
        const request = {
            uri: url.href,
            path: url.pathname,
            host: url.host,
            method: 'GET'
        };

        aws4.sign(request, {accessKeyId, secretAccessKey});
        console.log('Signed request', request);

        const response = await requestPromise(request);
        expect(response).to.equal('Hello world');
    });

});
