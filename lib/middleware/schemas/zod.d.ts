import { Schema } from 'zod';

declare const zod: Middleware<[
    schema: Schema<unknown>,
    data?: "body" | "query"
]>;

export { zod };
