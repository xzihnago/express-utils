export enum ANSI {
  RESET = "\x1b[0m",
  FAINT = "\x1b[2m",
  RED = "\x1b[31m",
  GREEN = "\x1b[32m",
  YELLOW = "\x1b[33m",
  BLUE = "\x1b[34m",
  MAGENTA = "\x1b[35m",
  BOLD_RED = "\x1b[1;31m",
}

export const colorize = (message: unknown, color: ANSI) =>
  `${color}${message as string}${ANSI.RESET}`;
