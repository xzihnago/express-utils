declare enum ANSI {
    RESET = "\u001B[0m",
    FAINT = "\u001B[2m",
    RED = "\u001B[31m",
    GREEN = "\u001B[32m",
    YELLOW = "\u001B[33m",
    BLUE = "\u001B[34m",
    MAGENTA = "\u001B[35m",
    BOLD_RED = "\u001B[1;31m"
}
declare const colorize: (message: unknown, color: ANSI) => string;

export { ANSI, colorize };
