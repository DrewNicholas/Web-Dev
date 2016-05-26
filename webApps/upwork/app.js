/*
AUTHOR: dmnicholas@me.com
VERSION: 1.0.0
PURPOSE: http server upwork contract
*/


'use strict';

class app {
    constructor() {
        this.loadServer();
    }

    loadServer() {
        const HTTP = require('http'),
            EJS = require('ejs'),
            PORT = 1337,
            SERVER = HTTP.createServer((req, res) => {
                let httpHandler = (err, str, contentType) => {  //http://stackoverflow.com/questions/336859/var-functionname-function-vs-function-functionname
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'text/plain' });
                        res.end('An error has occurred: ' + err.message);
                    } else if (contentType.indexOf('image') >= 0) {
                        res.writeHead(200, {'Content-Type': contentType});
                        res.end(str, 'binary');
                    } else if (contentType.indexOf('html') >= 0) {
                        res.writeHead(200, { 'Content-Type': contentType });
                        res.end(EJS.render(str, {
                            data: this.ejsData,
                            filename: 'index.ejs' }));
                    } else {
                        res.writeHead(200, { 'Content-Type': contentType });
                        res.end(str, 'utf-8');
                    }
                };

                if (req.method == 'POST') {
                    if (req.headers['x-requested-with'] === 'XMLHttpRequest') {
                        this.loadData(req, res, 0);
                    } else if (req.headers['x-requested-load'] === 'XMLHttpRequest1') {
                        this.loadData(req, res, 1);
                    } else {
                        console.log("[405] " + req.method + " to " + req.url);
                        res.writeHead(405, "Method not supported", { 'Content-Type': 'text/html' });
                        res.end('<html><head><title>405 - Method not supported</title></head><body><h1>Method not supported.</h1></body></html>');
                    }
                } else if (req.url.indexOf('/javascripts/') >= 0) {
                    this.render(req.url.slice(1), 'application/ecmascript', httpHandler, 'utf-8');
                } else if (req.url.indexOf('/css/') >= 0) {
                    this.render(req.url.slice(1), 'text/css', httpHandler, 'utf-8');
                } else if (req.url.indexOf('/images/') >= 0) {
                    this.render(req.url.slice(1), 'image/jpeg', httpHandler, 'binary');
                } else {
                    this.render('public/views/index.ejs', 'text/html', httpHandler, 'utf-8');
                }
            }).listen(PORT, _ => console.log('-= Work Order Server Listening at http://127.0.0.1:' + PORT + ' =-'));
    }

    render(path, contentType, callback, encoding) {
        const FS = require('fs');
        FS.readFile(__dirname + '/' + path, encoding ? encoding : 'utf-8', (err, str) => { // ternary
            callback(err, str, contentType);  // http://stackoverflow.com/questions/8131344/what-is-the-difference-between-dirname-and-in-node-js
        });
    }
}