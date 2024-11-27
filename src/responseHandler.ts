export const responseHandler: Middleware = (_, res, next) => {
  res.ok = (data) => {
    res.json({ data });
  };

  next();
};

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface Response {
      ok: (data: unknown) => void;
    }
  }
}
