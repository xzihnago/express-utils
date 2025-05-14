declare const responseHandler: Middleware;
declare module "express-serve-static-core" {
    interface Response {
        ok: (data: unknown) => void;
    }
}

export { responseHandler };
