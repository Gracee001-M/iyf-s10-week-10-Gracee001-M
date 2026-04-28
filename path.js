const path = require('path');

console.log(path.join(__dirname, 'files', 'data.json')); // join paths safely
console.log(path.extname('photo.jpg')); // .jpg