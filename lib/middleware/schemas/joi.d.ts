import { ObjectSchema } from 'joi';

declare const joi: Middleware<[
    schema: ObjectSchema<unknown>,
    data?: "body" | "query"
]>;

export { joi };
