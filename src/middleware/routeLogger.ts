import { logger } from "@/utils/logging";

export const routeLogger: Middleware = (req, _, next) => {
  logger.info(req);
  next();
};
