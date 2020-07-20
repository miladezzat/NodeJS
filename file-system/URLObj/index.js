const fs = require('fs');
// file should be an absolute paths.
const fileUrl = new URL('file');

fs.readFileSync(fileUrl);