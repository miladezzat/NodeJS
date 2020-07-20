const fs = require('fs');

// fs.open('./text.txt', 'r', (err, fd) => {
//   if (err) throw err;
//   console.log(process.pwd);
//   fs.close(fd, (err) => {
//     if (err) throw err;
//   });
// });

fs.open('text.txt', 'r', (err, fd) => {
    if (err) throw err;
    fs.close(fd, (err) => {
        if (err) throw err;
    });
});