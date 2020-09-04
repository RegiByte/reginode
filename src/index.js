#!/usr/bin/env node

const program = require("commander");
const packageConfig = require("../package.json");

program.version(packageConfig.version);

program
  .command("add [todo]")
  .description("Adds a todo")
  .action((todo) => {
    console.log(todo);
  });

program.parse(process.argv);
