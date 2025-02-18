declare const www: MiddlewareError<[
    redirect?: string | Partial<Record<number, string>>,
    messages?: string | Partial<Record<number, string>>
]>;

export { www };
