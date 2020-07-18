const fs = require('fs');

fs.stat('./text.txt', (err, stats) => {
    if (err) throw err;
    console.log(`stats: ${JSON.stringify(stats)}`);
});