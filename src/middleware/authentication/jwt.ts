import jsonwebtoken from "jsonwebtoken";

export const jwt: Middleware<
  [
    raw: string,
    secret: jsonwebtoken.Secret | jsonwebtoken.PublicKey,
    options?: jsonwebtoken.VerifyOptions,
  ]
> =
  (raw, secret, options = {}) =>
  (req, res, next) => {
    try {
      req.jwt = Object.assign(
        jsonwebtoken.verify(
          raw,
          secret,
          Object.assign(options, { complete: true } as const)
        ),
        { raw }
      );
    } catch (error) {
      res.status(401);
      throw error;
    }

    next();
  };

declare module "express-serve-static-core" {
  interface Request {
    jwt?: jsonwebtoken.Jwt & {
      raw: string;
    };
  }
}
