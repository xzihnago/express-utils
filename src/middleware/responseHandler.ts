export const responseHandler: Middleware = (_, res, next) => {
  res.ok = (data) => {
    res.json({ data });
  };

  next();
};

declare module "express-serve-static-core" {
  interface Response {
    ok: (data: unknown) => void;
  }
}
