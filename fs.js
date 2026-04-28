const fs = require('fs');

// Read file (synchronous)
const content = fs.readFileSync('hello.js', 'utf-8');
console.log(content);

// Read file (asynchronous - preferred)
fs.readFile('hello.js', 'utf-8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});

// Write file
fs.writeFileSync('output.txt', 'Hello, World!');