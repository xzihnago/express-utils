import { local } from './middleware/authentication/local.js';
import { jwt } from './middleware/authentication/jwt.js';

declare const index_jwt: typeof jwt;
declare const index_local: typeof local;
declare namespace index {
  export { index_jwt as jwt, index_local as local };
}

export { index as i };
