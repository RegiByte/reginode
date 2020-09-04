const standaloneCommands = require("./commands/standalone");

const commands = [...standaloneCommands];

function setupCommands(program) {
  commands.forEach((setupCommand) => setupCommand(program));
}

module.exports = setupCommands;
