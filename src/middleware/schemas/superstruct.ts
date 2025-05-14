import type { Struct } from "superstruct";

export const superstruct: Middleware<[schema: Struct]> =
  (schema) => (req, res, next) => {
    try {
      req.body = schema.create(req.body);
    } catch (error) {
      res.status(422);
      throw error;
    }

    next();
  };
