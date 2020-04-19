const fs = require('fs');

const root = fs.readdirSync('./');

console.log(root);

export const config = {
    a: 'es Module for electron'
};