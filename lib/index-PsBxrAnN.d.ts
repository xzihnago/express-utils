import { ANSI, colorize } from './utils/logging/ansi.js';
import { logger } from './utils/logging/logger.js';

declare const index_ANSI: typeof ANSI;
declare const index_colorize: typeof colorize;
declare const index_logger: typeof logger;
declare namespace index {
  export { index_ANSI as ANSI, index_colorize as colorize, index_logger as logger };
}

export { index as i };
