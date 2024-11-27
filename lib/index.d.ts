import * as qs from 'qs';
import * as express_serve_static_core from 'express-serve-static-core';
import { RequestHandler } from 'express';
export { routeLog } from './routeLog.js';
export { responseHandler } from './responseHandler.js';
import { e as errorHandler } from './index-VyT0c6E9.js';
import { a as authentication } from './index-BJ4gDn97.js';
import { v as validateSchema } from './index-VNaVSjK3.js';
import './errorHandler/api.js';
import './errorHandler/www.js';
import './authentication/local.js';
import './authentication/jwt.js';
import 'jsonwebtoken';
import './validateSchema/zod.js';
import 'zod';

declare const middleware: {
    routeLog: RequestHandler<express_serve_static_core.ParamsDictionary, any, any, qs.ParsedQs, Record<string, any>>;
    responseHandler: RequestHandler<express_serve_static_core.ParamsDictionary, any, any, qs.ParsedQs, Record<string, any>>;
    errorHandler: typeof errorHandler;
    authentication: typeof authentication;
    validateSchema: typeof validateSchema;
};

declare global {
    type Middleware<Args extends unknown[] = []> = Args extends [] ? RequestHandler : (...args: Args) => Middleware;
    type MiddlewareError<Args extends unknown[] = []> = Args extends [] ? (error: unknown, ...args: Parameters<RequestHandler>) => ReturnType<RequestHandler> : (...args: Args) => MiddlewareError;
}

export { authentication, middleware as default, errorHandler, validateSchema };
