import type { Request } from "express";
import { format, transports, createLogger } from "winston";
import "winston-daily-rotate-file";
import { ANSI, colorize } from "./ansi";

const fmt = format.combine(
  format.timestamp(),
  format((info) => {
    info.level = info.level.toUpperCase().padStart(7);
    return info;
  })()
);

const console = new transports.Console({
  format: format.combine(
    fmt,
    format.colorize(),
    format.printf((info) => {
      const req = info.message as Request;
      return [
        colorize(info.timestamp, ANSI.FAINT),
        info.level,
        colorize(
          `[${req.ip ?? req.socket.remoteAddress ?? "unknown"}]`.padEnd(18),
          ANSI.MAGENTA
        ),
        colorize(req.method.padStart(7), ANSI.YELLOW),
        req.path,
      ].join(" ");
    })
  ),
});

const file = new transports.DailyRotateFile({
  format: format.combine(
    fmt,
    format.printf((info) => {
      const req = info.message as Request;
      return [
        info.timestamp,
        info.level,
        `[${req.ip ?? req.socket.remoteAddress ?? "unknown"}]`.padEnd(18),
        req.method.padStart(7),
        req.path,
      ].join(" ");
    })
  ),
  auditFile: "logs/.audit",
  filename: "logs/%DATE%.log",
  maxFiles: "28d",
});

export const logger = createLogger({
  level: "debug",
  transports: [console, file],
  handleExceptions: true,
  handleRejections: true,
});
