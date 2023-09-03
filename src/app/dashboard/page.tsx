"use client";
import React from "react";
import { useSession, getSession } from "next-auth/react";
import AdminNavigation from "../../components/AdminNavigation";

export default function Dashboard() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    return <p>Access Denied</p>;
  }

  return <AdminNavigation />;
}
