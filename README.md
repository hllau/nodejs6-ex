Node.js 6 Template
==================

A template project using Node.js 6 and express.

## Local Development

1. Get `NodeJS 6.4`, then:

        $ npm install
        $ npm test
        $ npm start


## Using Docker Template

1. Get `Docker v1.12` and `S2I v1.1.0`, then:

        $ s2i build . lung220/s2i-centos7-nodejs64 awesome-app
        $ docker run -it --rm -p 3000:3000 awesome-app
        $ curl localhost:3000

