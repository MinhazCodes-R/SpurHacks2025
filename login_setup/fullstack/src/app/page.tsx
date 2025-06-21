// src/app/page.tsx
"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function HomePage() {
  const { data: session, status } = useSession();
  if (status === "loading") return <p>Loading…</p>;

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Welcome to My App</h1>
      {session ? (
        <>
          <p>Hi, {session.user?.name}</p>
          <button onClick={() => signOut()}>Sign out</button>
        </>
      ) : (
        <button onClick={() => signIn("google")}>
          Sign in with Google
        </button>
      )}
    </main>
  );
}
