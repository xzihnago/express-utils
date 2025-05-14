import { RequestHandler } from 'express';
export { i as middleware } from './index-CM39mrw7.js';
export { i as utils } from './index-CQJ9JPvW.js';
import './middleware/routeLogger.js';
import './middleware/responseHandler.js';
import './index-D_L86mT5.js';
import './middleware/errorHandler/api.js';
import './middleware/errorHandler/www.js';
import './index-CEYXosCm.js';
import './middleware/authentication/local.js';
import './index-D8Z-fIvx.js';
import './middleware/schemas/joi.js';
import 'joi';
import './middleware/schemas/superstruct.js';
import 'superstruct';
import './middleware/schemas/zod.js';
import 'zod';
import './index-PsBxrAnN.js';
import './utils/logging/ansi.js';
import './utils/logging/logger.js';
import 'winston';
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
