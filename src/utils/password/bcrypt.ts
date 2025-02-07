import bcrypt from "bcrypt";

export const hash = async (password: string) => bcrypt.hash(password, 10);

export const verify = async (password: string, hash: string) =>
  bcrypt.compare(password, hash);
