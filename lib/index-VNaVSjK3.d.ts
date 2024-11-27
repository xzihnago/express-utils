import { zod } from './validateSchema/zod.js';

declare const validateSchema_zod: typeof zod;
declare namespace validateSchema {
  export { validateSchema_zod as zod };
}

export { validateSchema as v };
