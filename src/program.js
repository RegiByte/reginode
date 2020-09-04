const program = require("commander");
const packageConfig = require("../package.json");
const setupCommands = require("./commands");

program.version(packageConfig.version);

setupCommands(program);

module.exports = program;
