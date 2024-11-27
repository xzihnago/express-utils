declare const responseHandler: Middleware;
declare global {
    namespace Express {
        interface Response {
            ok: (data: unknown) => void;
        }
    }
}

export { responseHandler };
