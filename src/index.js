#!/usr/bin/env node

const program = require("./program");

let stdin = "";

if (process.stdin.isTTY) {
  program.parse(process.argv);
} else {
  process.stdin.on("readable", function () {
    const chunk = this.read();

    if (chunk !== null) {
      stdin += chunk;
    }
  });

  process.stdin.on("end", function () {
    program.parse([...process.argv, stdin.trim()]);
  });
}
