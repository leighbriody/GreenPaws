import React from "react";
import Link from "next/link";
import {
  createCheckoutLink,
  createCustomerIfNull,
  generateCustomerPortalLink,
  hasSubscription,
} from "@/helpers/billing";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

const prisma = new PrismaClient();

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  const user = await prisma.user.findFirst({
    where: {
      email: session?.user?.email,
    },
  });
  await createCustomerIfNull();
  const manageLink = await generateCustomerPortalLink(
    "" + user?.stripe_customer_id
  );
  const checkoutLink = await createCheckoutLink("" + user?.stripe_customer_id);

  const hasSub = await hasSubscription();
  return (
    <div className="bg-white dark:bg-gray-800 dark:text-white flex items-center justify-center pt-20 pb-10">
      <div className="p-8 w-96 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Subscription Management</h1>
        <p>To manage your billing or upgrade, please select an option:</p>

        {hasSub ? (
          <div className="mt-4">
            <p className="text-green-600 font-semibold">Subscribed</p>
            <Link href={"" + manageLink} className="text-blue-600 underline">
              Manage Billing
            </Link>
          </div>
        ) : (
          <div className="mt-4">
            <p className="text-red-600 font-semibold">Not Subscribed</p>
            <Link href={"" + checkoutLink} className="text-blue-600 underline">
              Upgrade
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
