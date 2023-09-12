"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

interface ManageBillingModalProps {
  userImage: string;
  userEmail: string;
  userName: String;
  hasSub: boolean;
  manageLink: string;
  checkoutLink: String;
}
export default function ManageBillingModal({
  userImage,
  userEmail,
  userName,
  hasSub,
  manageLink,
  checkoutLink,
}: ManageBillingModalProps) {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "darl";

  return (
    <div className="relative mt-40 mb-40">
      <div className=" p-8 rounded-lg shadow-lg w-96 mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold">Manage Billing</h2>
        </div>
        <div className="flex flex-col mb-6">
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-4">Profile</h3>
            <div className="flex items-center mb-4">
              <Image
                src={userImage}
                width={500}
                height={500}
                alt="user profile"
                className="w-16 h-16 rounded-full mr-4"
              />

              <div>
                <h4 className="text-content text-lg">{userName}</h4>
                <p className="text-content">{userEmail}</p>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Subscription</h3>
            <div className="mb-2">
              <p className="text-content">
                {hasSub ? "Pro Subscription" : "Free Subscription"}
              </p>
            </div>
            <div className="mb-4"></div>
            {hasSub ? (
              <>
                <Link
                  className="text-content px-4 py-2 rounded bg-blue-600 hover:bg-blue-500"
                  href={manageLink}
                >
                  Manage Subscription
                </Link>
              </>
            ) : (
              <>
                <Link
                  className="bg-blue-500 text-white px-4 py-2 roundedbg-blue-600 hover:bg-blue-500"
                  href={"" + checkoutLink}
                >
                  Upgrade Subscrption
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
