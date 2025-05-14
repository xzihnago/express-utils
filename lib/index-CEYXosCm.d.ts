import { local } from './middleware/authentication/local.js';

declare const index_local: typeof local;
declare namespace index {
  export { index_local as local };
}

export { index as i };
