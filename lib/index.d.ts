import { RequestHandler } from 'express';
export { i as middleware } from './index-D9oM5MoF.js';
export { i as utils } from './index-wbUJ6LfB.js';
import './middleware/routeLog.js';
import './middleware/responseHandler.js';
import './index-D_L86mT5.js';
import './middleware/errorHandler/api.js';
import './middleware/errorHandler/www.js';
import './index-CTVeQFb_.js';
import './middleware/authentication/local.js';
import './middleware/authentication/jwt.js';
import 'jsonwebtoken';
import './index-Bdlz2-nR.js';
import './middleware/validateSchema/joi.js';
import 'joi';
import './middleware/validateSchema/superstruct.js';
import 'superstruct';
import './middleware/validateSchema/zod.js';
import 'zod';
import './index-CH5VF03e.js';
import './bcrypt-xaHB9h-S.js';
import './hmac-BylG0Vt7.js';
import 'crypto';

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
