import type { RequestHandler } from "express";
import { routeLog } from "./routeLog";
import { responseHandler } from "./responseHandler";
import * as errorHandler from "./errorHandler";
import * as authentication from "./authentication";
import * as validateSchema from "./validateSchema";

const middleware = {
  routeLog,
  responseHandler,
  errorHandler,
  authentication,
  validateSchema,
};

export default middleware;
export {
  routeLog,
  responseHandler,
  errorHandler,
  authentication,
  validateSchema,
};

declare global {
  type Middleware<Args extends unknown[] = []> = Args extends []
    ? RequestHandler
    : (...args: Args) => Middleware;

  type MiddlewareError<Args extends unknown[] = []> = Args extends []
    ? (
        error: unknown,
        ...args: Parameters<RequestHandler>
      ) => ReturnType<RequestHandler>
    : (...args: Args) => MiddlewareError;
}
