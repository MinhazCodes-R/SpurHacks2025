"use client";

import { useSession } from "next-auth/react";

export default function DashboardPage() {
  const { data: session } = useSession();

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Dashboard</h1>
      <p>Welcome back, <strong>{session?.user?.name}</strong>!</p>
      <p>Your email is: {session?.user?.email}</p>

      <section style={{ marginTop: "2rem" }}>
        <h2>📊 Overview</h2>
        <ul>
          <li>✔️ You are signed in with Google</li>
          <li>🕒 Last login: just now</li>
          <li>📁 Projects: 3 active</li>
        </ul>
      </section>
    </div>
  );
}
