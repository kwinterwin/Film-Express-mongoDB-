const fs = require('fs');
const path= require('path');


function avtor(req,res){

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    const stream = fs.createReadStream(path.join(__dirname, '../html/authorization.html'));

    stream.pipe(res);
}

module.exports = avtor;