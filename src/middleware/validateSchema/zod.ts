import type { Schema } from "zod";

export const zod: Middleware<[schema: Schema<unknown>]> =
  (schema) => async (req, res, next) => {
    try {
      req.body = await schema.parseAsync(req.body);
    } catch (error) {
      res.status(422);
      throw error;
    }

    next();
  };
