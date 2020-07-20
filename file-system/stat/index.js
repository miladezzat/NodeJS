const fs = require('fs');


function fileStat(params) {
    fs.stat('./text.txt', (err, stats) => {
        if (err) throw err;l
        console.log(`stats: ${JSON.stringify(stats)}`);
    });    
}

fileStat();