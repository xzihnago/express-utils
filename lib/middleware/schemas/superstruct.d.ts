import { Struct } from 'superstruct';

declare const superstruct: Middleware<[
    schema: Struct,
    data?: "body" | "query"
]>;

export { superstruct };
