import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.AUTH_SECRET, // must match your .env value
  callbacks: {
    async redirect({ url, baseUrl }) {
        // Allow relative callback URLs
        return `${baseUrl}/dashboard`;
    },
    
    async session({ session, token, user }) {
      return session;
    },
    async jwt({ token, user }) {
      return token;
    },
    
  },
});

export { handler as GET, handler as POST };
