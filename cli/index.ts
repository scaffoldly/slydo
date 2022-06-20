#!/usr/bin/env node

export class Command {
  private argv: string[];
  constructor(argv: string[]) {
    this.argv = argv;
  }

  public async run(): Promise<void> {
    console.log('slydo!');
    return;
  }
}

(async () => {
  const command = new Command(process.argv);
  try {
    await command.run();
    process.exit(0);
  } catch (e) {
    process.exit(-1);
  }
})();
