import { joi } from './middleware/schemas/joi.js';
import { superstruct } from './middleware/schemas/superstruct.js';
import { zod } from './middleware/schemas/zod.js';

declare const index_joi: typeof joi;
declare const index_superstruct: typeof superstruct;
declare const index_zod: typeof zod;
declare namespace index {
  export { index_joi as joi, index_superstruct as superstruct, index_zod as zod };
}

export { index as i };
