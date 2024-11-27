import { api } from './errorHandler/api.js';
import { www } from './errorHandler/www.js';

declare const errorHandler_api: typeof api;
declare const errorHandler_www: typeof www;
declare namespace errorHandler {
  export { errorHandler_api as api, errorHandler_www as www };
}

export { errorHandler as e };
