import { BinaryToTextEncoding } from 'crypto';

declare const hash: (data: string, algorithm?: string, encoding?: BinaryToTextEncoding) => string;
declare const verify: (data: string, encrypted: string, algorithm?: string, encoding?: BinaryToTextEncoding) => boolean;

declare const hmac_hash: typeof hash;
declare const hmac_verify: typeof verify;
declare namespace hmac {
  export { hmac_hash as hash, hmac_verify as verify };
}

export { hash as a, hmac as h, verify as v };
