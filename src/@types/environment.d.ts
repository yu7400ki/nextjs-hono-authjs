namespace NodeJS {
  interface ProcessEnv extends NodeJS.ProcessEnv {
    readonly DB: D1Database;
  }
}
