import jsonwebtoken from 'jsonwebtoken';

declare const jwt: Middleware<[
    raw: string,
    secret: jsonwebtoken.Secret | jsonwebtoken.PublicKey,
    options?: jsonwebtoken.VerifyOptions
]>;
declare module "express-serve-static-core" {
    interface Request {
        jwt?: jsonwebtoken.Jwt & {
            raw: string;
        };
    }
}

export { jwt };
