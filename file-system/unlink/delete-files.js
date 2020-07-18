const fs = require('fs');


// async

// fs.unlink('./del.txt', (err, d)=>{
//     if(err) throw err;
//     console.log(d);
//     console.log("File successful deleted");
// });


//sync
try {
    fs.unlinkSync('./delete-files.js')   
} catch (error) {
    console.log(error);
}