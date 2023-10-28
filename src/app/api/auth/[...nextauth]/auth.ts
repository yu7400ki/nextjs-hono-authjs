import NextAuth from "next-auth";
import Line from "next-auth/providers/line";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import db from "@/db";

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  adapter: DrizzleAdapter(db),
  providers: [
    Line({
      clientId: process.env.LINE_CLIENT_ID,
      clientSecret: process.env.LINE_CLIENT_SECRET,
      checks: ["state"],
    }),
  ],
});
