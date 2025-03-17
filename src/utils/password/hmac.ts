import type { BinaryToTextEncoding } from "crypto";
import crypto from "crypto";

export const hash = (
  data: string,
  algorithm = "sha256",
  encoding: BinaryToTextEncoding = "base64"
) => {
  const salt = crypto.randomBytes(16);
  const hmac = crypto.createHmac(algorithm, salt).update(data);

  return Buffer.concat([salt, hmac.digest()]).toString(encoding);
};

export const verify = (
  data: string,
  encrypted: string,
  algorithm = "sha256",
  encoding: BinaryToTextEncoding = "base64"
) => {
  const buffer = Buffer.from(encrypted, encoding);
  const [salt, hmac] = [buffer.subarray(0, 16), buffer.subarray(16)];

  const hmacTest = crypto.createHmac(algorithm, salt).update(data);

  return hmac.toString(encoding) === hmacTest.digest(encoding);
};
