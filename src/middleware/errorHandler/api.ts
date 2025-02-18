// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const api: MiddlewareError = (error, _req, res, _next) => {
  if (res.statusCode === 200) {
    res.status(500);
  }

  if (error instanceof Error && JSON.stringify(error) === "{}") {
    res.json({
      error: {
        name: error.name,
        message: error.message,
      },
    });
  } else {
    res.json({ error });
  }
};
