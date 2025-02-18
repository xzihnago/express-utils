import { joi } from './middleware/validateSchema/joi.js';
import { superstruct } from './middleware/validateSchema/superstruct.js';
import { zod } from './middleware/validateSchema/zod.js';

declare const index_joi: typeof joi;
declare const index_superstruct: typeof superstruct;
declare const index_zod: typeof zod;
declare namespace index {
  export { index_joi as joi, index_superstruct as superstruct, index_zod as zod };
}

export { index as i };
