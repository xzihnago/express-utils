import jsonwebtoken from 'jsonwebtoken';

declare const jwt: Middleware<[
    secret: jsonwebtoken.Secret | jsonwebtoken.PublicKey,
    cookie?: string
]>;
declare global {
    namespace Express {
        interface Request {
            jwt: {
                token: string;
                decoded: string | jsonwebtoken.JwtPayload;
            };
        }
    }
}

export { jwt };
