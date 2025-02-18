import type { RequestHandler } from "express";

declare global {
  export type Middleware<Args extends unknown[] = []> = Args extends []
    ? RequestHandler
    : (...args: Args) => Middleware;

  export type MiddlewareError<Args extends unknown[] = []> = Args extends []
    ? (
        error: unknown,
        ...args: Parameters<RequestHandler>
      ) => ReturnType<RequestHandler>
    : (...args: Args) => MiddlewareError;
}
