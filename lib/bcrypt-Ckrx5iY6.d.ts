declare const hash: (password: string) => Promise<string>;
declare const verify: (password: string, hash: string) => Promise<boolean>;

declare const bcrypt_hash: typeof hash;
declare const bcrypt_verify: typeof verify;
declare namespace bcrypt {
  export { bcrypt_hash as hash, bcrypt_verify as verify };
}

export { bcrypt as b, hash as h, verify as v };
