// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const api: MiddlewareError = (error, _req, res, _next) => {
  if (res.statusCode === 200) {
    res.status(500);
  }

  if (JSON.stringify(error) === "{}" && error instanceof Error) {
    res.json({ error: error.message });
  } else {
    res.json({ error });
  }
};
