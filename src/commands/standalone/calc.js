const chalk = require("chalk");
const {
  COMMAND_CALC_SHOW_ERROR_MESSAGE_MISSING_FORMULA,
} = require("../../constants/messages");
const { COMMAND_CALC_SHOW_ERROR_MESSAGE } = require("../../constants/messages");
const {
  COMMAND_CALC_SHOW_RESULT_MESSAGE,
} = require("../../constants/messages");
const {
  COMMAND_CALC_SHOW_FORMULA_MESSAGE,
} = require("../../constants/messages");
const { COMMAND_CALC_DESCRIPTION } = require("../../constants/description");
const { COMMAND_CALC_SYNTAX } = require("../../constants/syntax");
const { format } = require("../../helpers/string");

function commandCalc(program) {
  program
    .command(COMMAND_CALC_SYNTAX)
    .description(COMMAND_CALC_DESCRIPTION)
    .option("-s", "--silent", "runs in silence")
    .action((formula) => {
      if (!formula) {
        return console.log(
          chalk.red(format(COMMAND_CALC_SHOW_ERROR_MESSAGE_MISSING_FORMULA))
        );
      }

      console.log(
        chalk.blue(format(COMMAND_CALC_SHOW_FORMULA_MESSAGE, formula))
      );

      try {
        const result = eval(formula);
        console.log(
          chalk.green(format(COMMAND_CALC_SHOW_RESULT_MESSAGE, result))
        );
      } catch (e) {
        console.log(chalk.red(format(COMMAND_CALC_SHOW_ERROR_MESSAGE)));
      }
    });
}

module.exports = commandCalc;
