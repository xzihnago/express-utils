import { api } from './middleware/errorHandler/api.js';
import { www } from './middleware/errorHandler/www.js';

declare const index_api: typeof api;
declare const index_www: typeof www;
declare namespace index {
  export { index_api as api, index_www as www };
}

export { index as i };
