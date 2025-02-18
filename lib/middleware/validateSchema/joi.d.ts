import { ObjectSchema } from 'joi';

declare const joi: Middleware<[schema: ObjectSchema<unknown>]>;

export { joi };
