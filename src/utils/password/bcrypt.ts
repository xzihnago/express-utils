import bcrypt from "bcrypt";

export const hash = async (data: string) => bcrypt.hash(data, 10);

export const verify = async (data: string, encrypted: string) =>
  bcrypt.compare(data, encrypted);
