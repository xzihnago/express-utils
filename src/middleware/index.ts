import type { RequestHandler } from "express";
export { routeLog } from "./routeLog";
export { responseHandler } from "./responseHandler";
export * as errorHandler from "./errorHandler";
export * as authentication from "./authentication";
export * as validateSchema from "./validateSchema";

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
