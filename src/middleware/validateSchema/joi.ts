import type { ObjectSchema } from "joi";

export const joi: Middleware<[schema: ObjectSchema<unknown>]> =
  (schema) => async (req, res, next) => {
    try {
      req.body = await schema.validateAsync(req.body);
    } catch (error) {
      res.status(422);
      throw error;
    }

    next();
  };
