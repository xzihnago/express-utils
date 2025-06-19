import type { ObjectSchema } from "joi";

export const joi: Middleware<
  [schema: ObjectSchema<unknown>, data?: "body" | "query"]
> =
  (schema, data = "body") =>
  async (req, res, next) => {
    try {
      if (data === "body") {
        req.body = await schema.validateAsync(req.body);
      } else {
        await schema.validateAsync(req.query);
      }
    } catch (error) {
      res.status(422);
      throw error;
    }

    next();
  };
