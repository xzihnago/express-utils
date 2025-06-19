import type { Schema } from "zod";

export const zod: Middleware<
  [schema: Schema<unknown>, data?: "body" | "query"]
> =
  (schema, data = "body") =>
  async (req, res, next) => {
    try {
      if (data === "body") {
        req.body = await schema.parseAsync(req.body);
      } else {
        await schema.parseAsync(req.query);
      }
    } catch (error) {
      res.status(422);
      throw error;
    }

    next();
  };
