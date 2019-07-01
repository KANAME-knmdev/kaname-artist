export type HandleLogin = (
  email: string,
  password: string
) => Promise<void | string>;
