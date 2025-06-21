// src/middleware.ts
import { withAuth } from "next-auth/middleware";

export default withAuth({
  // This callback runs on every request
  callbacks: {
    authorized: ({ token }) => {
      // Return true to allow, false to block
      return !!token; // ✅ only allow if user is logged in
    },
  },
});

// Protect these routes
export const config = {
  matcher: [
    "/dashboard/:path*",   // protect /dashboard and all subroutes
    "/admin/:path*",       // protect /admin/*
    "/profile",            // protect /profile
  ],
};
