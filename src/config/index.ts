import { z } from "zod";

const envVars = z.object({
  // Server
  PORT: z.string().default("3000"),
  NODE_ENV: z.string().default("development"),
  // NextAuth
  NEXT_PUBLIC_APP_URL: z.string(),
  // Credentials for the database
  DB_HOST: z.string(),
  DB_NAME: z.string(),
  DB_USER: z.string(),
  DB_PASS: z.string(),
  DB_PORT: z.number(),
  // Backend API
  BACKEND_API_URL: z.string(),
});

envVars.parse(process.env);

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envVars> {}
  }
}
