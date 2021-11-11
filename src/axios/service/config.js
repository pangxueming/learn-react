const devBASE_URL = "https://httpbin.org";
const proBASE_URL = "https://production.org";

export const BASE_URL = process.env.NODE_ENV === 'devlopment' ? proBASE_URL : devBASE_URL;

export const TIMEOUT = 5000;