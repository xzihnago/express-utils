import type { Struct } from "superstruct";

export const superstruct: Middleware<
  [schema: Struct, data?: "body" | "query"]
> =
  (schema, data = "body") =>
  (req, res, next) => {
    try {
      if (data === "body") {
        req.body = schema.create(req.body);
      } else {
        schema.create(req.query);
      }
    } catch (error) {
      res.status(422);
      throw error;
    }

    next();
  };
