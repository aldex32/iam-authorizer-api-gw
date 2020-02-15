# AIM authorized REST service
It is a simple hello world service which allows only authenticated requests made by AWS Signature version 4.

In the test file there is an example to how to sign the request properly.

## Build and deploy
```bash
npm i
npx sls deploy
```

## Run the test
Before running the test, make sure you set `accessKeyId` and `secretAccessKey` of your IAM user,
and also set the generated endpoint in the `handler.test.js` file.
```bash
npx mocha handler.test.js
```
