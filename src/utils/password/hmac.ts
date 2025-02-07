import type { BinaryToTextEncoding } from "crypto";
import crypto from "crypto";

export const hash = (
  data: string,
  algorithm = "sha256",
  encoding: BinaryToTextEncoding = "base64"
) => {
  const salt = crypto.randomBytes(16);
  const hash = crypto.createHmac(algorithm, salt).update(data);

  return `${salt.toString(encoding)}.${hash.digest(encoding)}`;
};

export const verify = (
  data: string,
  encrypted: string,
  algorithm = "sha256",
  encoding: BinaryToTextEncoding = "base64"
) => {
  const [salt, hash] = encrypted.split(".");
  const hashData = crypto
    .createHmac(algorithm, Buffer.from(salt, encoding))
    .update(data);

  return hash === hashData.digest(encoding);
};
