import jsonwebtoken from "jsonwebtoken";

export const jwt: Middleware<
  [secret: jsonwebtoken.Secret | jsonwebtoken.PublicKey, cookie?: string]
> = (secret, cookie) => (req, res, next) => {
  let token = req.headers.authorization?.split(" ")[1];

  if (!token && cookie) {
    token =
      (req.signedCookies as Cookie)?.[cookie] ??
      (req.cookies as Cookie)?.[cookie];
  }

  if (!token) {
    res.status(401);
    throw new Error("No authorization header or cookie");
  }

  try {
    const decoded = jsonwebtoken.verify(token, secret);
    req.jwt = {
      token,
      decoded,
    };
  } catch (error) {
    res.status(401);
    throw error;
  }

  next();
};

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface Request {
      jwt: {
        token: string;
        decoded: string | jsonwebtoken.JwtPayload;
      };
    }
  }
}

type Cookie = Record<string, string> | undefined;
