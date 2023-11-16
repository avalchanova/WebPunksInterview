declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production" | "test"
    DB_NAME: string
    DB_HOST: string
    DB_PORT: string
    DB_USERNAME: string
    DB_PASSWORD: string
    TYPEORM_SYNCHRONIZE: string
    HTTP_PORT: string
  }
}
