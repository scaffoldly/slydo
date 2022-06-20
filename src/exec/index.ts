import proc from 'child_process';

export const exec = (argv: string[]): Promise<number> => {
  return new Promise((resolve, reject) => {
    const env = {
      ...process.env,
    };

    const p = proc.spawn(argv[0], argv.slice(1), {
      shell: true,
      env,
    });

    p.on('error', (err) => {
      reject(err);
    });

    p.on('exit', (code) => {
      resolve(code);
    });

    p.stdin.pipe(process.stdin);
    p.stdout.pipe(process.stdout);
    p.stderr.pipe(process.stderr);
  });
};
