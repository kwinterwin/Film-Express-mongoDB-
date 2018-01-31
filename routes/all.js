const fs = require('fs');
const path= require('path');

function all(req,res){
    const extension = path.extname(req.url);
    var contentType = '';

    switch (extension){
        case '.html':
            contentType = 'text/html';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpeg';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        default:
            contentType = 'text/plain';
            break;
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', contentType);

    const stream = fs.createReadStream(path.join(__dirname, '..', req.url));

    stream.pipe(res);
    stream.on('error', function (error) {
        if (error.code === 'ENOENT'){
            console.log(error);
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('Not found');
        } else {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end(error.message);
        }
    });
}

module.exports = all;