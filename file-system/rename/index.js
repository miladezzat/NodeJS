const fs = require('fs');
/**
 * async
 */
// fs.rename('./y.txt', '../y.txt', (err) => {
//     if (err) throw err;
//     console.log('renamed complete');
// });

/**
 * sync
 */
try {
    let returned = fs.renameSync('./y.txt', './x.txt');
    console.log(returned);
} catch (error) {
    console.log(error);
}
