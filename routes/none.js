const fs = require('fs');
const path= require('path');


function none(req,res){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    const stream = fs.createReadStream(path.join(__dirname, '../html/error.html'));

    stream.pipe(res);
}

module.exports = none;