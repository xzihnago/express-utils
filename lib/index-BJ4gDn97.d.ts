import { local } from './authentication/local.js';
import { jwt } from './authentication/jwt.js';

declare const authentication_jwt: typeof jwt;
declare const authentication_local: typeof local;
declare namespace authentication {
  export { authentication_jwt as jwt, authentication_local as local };
}

export { authentication as a };
