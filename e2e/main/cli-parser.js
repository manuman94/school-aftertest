const optionDefinitions = [
    { name: 'baseurl', type: String },
];

const commandLineArgs = require('command-line-args');
const options = commandLineArgs(optionDefinitions);

module.exports = options;