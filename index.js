const minimist = require('minimist');

const path = require('path');
const chalk = require('chalk');

const appName = path.basename(process.argv[1]);
const help = `${chalk.bold('Usage')} ${appName} ${chalk.blue(
  '[command]'
)} [options]\n`;
const detailedHelp = `
${chalk.blue('--help')}
  Shows ${chalk.cyan('this help')}
`;

class SlydoCli {
  constructor(args) {
    this._args = args;
    this._options = minimist(args, {
      boolean: ['help'],
      string: [],
      alias: {},
      default: {},
      '--': true
    });
  }

  run() {
    if (this._options.help) {
      return this._help(true);
    }

    switch (this._args[0]) {
      default:
        this._help();
    }
  }

  _help(details) {
    this._exit(
      help +
        (details
          ? detailedHelp
          : `Use ${chalk.white('--help')} for more info.\n`)
    );
  }

  _exit(error, code = 1) {
    if (error) {
      console.error(error);
    }

    /* eslint unicorn/no-process-exit: "off" */
    process.exit(code);
  }
}

module.exports = SlydoCli;
