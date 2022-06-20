#!/usr/bin/env node

import { serverlessExec } from 'src';

export class Command {
  private argv: string[];
  constructor(argv: string[]) {
    this.argv = argv;
  }

  public async run(): Promise<number> {
    const argv = this.argv.slice(2);
    if (!argv.length) {
      console.log('TODO Help');
      return 0;
    }
    if (argv[0] === 'serverless') {
      return serverlessExec(argv);
    }
    throw new Error(`Unknown command: ${argv.join(' ')}`);
  }
}

(async () => {
  const command = new Command(process.argv);
  try {
    await command.run();
    process.exit(0);
  } catch (e) {
    if (e instanceof Error) {
      console.error(e.message);
    }
    process.exit(-1);
  }
})();
