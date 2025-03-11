import type { BinaryToTextEncoding } from "crypto";
import crypto from "crypto";

export const hash = (
  data: string,
  algorithm = "sha256",
  encoding: BinaryToTextEncoding = "base64"
) => {
  const salt = crypto.randomBytes(16);
  const hash = crypto.createHmac(algorithm, salt).update(data);

  return Buffer.concat([salt, hash.digest()]).toString(encoding);
};

export const verify = (
  data: string,
  encrypted: string,
  algorithm = "sha256",
  encoding: BinaryToTextEncoding = "base64"
) => {
  const buffer = Buffer.from(encrypted, encoding);
  const [salt, hash] = [buffer.subarray(0, 16), buffer.subarray(16)];
  const hashData = crypto.createHmac(algorithm, salt).update(data);

  return hash.toString(encoding) === hashData.digest(encoding);
};
