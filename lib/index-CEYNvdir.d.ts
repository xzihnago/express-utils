import { zod } from './middleware/validateSchema/zod.js';

declare const index_zod: typeof zod;
declare namespace index {
  export { index_zod as zod };
}

export { index as i };
