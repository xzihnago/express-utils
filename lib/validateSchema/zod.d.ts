import { Schema } from 'zod';

declare const zod: Middleware<[schema: Schema<unknown>]>;

export { zod };
