import { create, type Struct } from "superstruct";

export const superstruct: Middleware<[schema: Struct]> =
  (schema) => (req, res, next) => {
    try {
      req.body = create(req.body, schema);
    } catch (error) {
      res.status(422);
      throw error;
    }

    next();
  };
