import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function DashboardJobs() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/sign-in?callbackUrl=/dashboard/profile");
  }
  return <div className="dark:bg-gray-800 dark:text-white">Applications</div>;
}
