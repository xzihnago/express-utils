import { RequestHandler } from 'express';
import { routeLog } from './middleware/routeLog.js';
import { responseHandler } from './middleware/responseHandler.js';
import { i as index$2 } from './index-D_L86mT5.js';
import { i as index$1 } from './index-CTVeQFb_.js';
import { i as index$3 } from './index-CEYNvdir.js';

declare global {
    type Middleware<Args extends unknown[] = []> = Args extends [] ? RequestHandler : (...args: Args) => Middleware;
    type MiddlewareError<Args extends unknown[] = []> = Args extends [] ? (error: unknown, ...args: Parameters<RequestHandler>) => ReturnType<RequestHandler> : (...args: Args) => MiddlewareError;
}

declare const index_responseHandler: typeof responseHandler;
declare const index_routeLog: typeof routeLog;
declare namespace index {
  export { index$1 as authentication, index$2 as errorHandler, index_responseHandler as responseHandler, index_routeLog as routeLog, index$3 as validateSchema };
}

export { index as i };
