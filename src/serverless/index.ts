import { exec } from 'src/exec';

export const serverlessExec = async (argv: string[]): Promise<number> => {
  //TODO: Locate serverless binary
  return exec(['yarn', ...argv]);
};
