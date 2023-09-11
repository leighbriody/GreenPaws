import React from "react";
import { PrismaClient } from "@prisma/client";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Stripe from "stripe";
import Image from "next/image";
import {
  createCheckoutLink,
  createCustomerIfNull,
  generateCustomerPortalLink,
  getSubscriptionStartDate,
  hasSubscription,
} from "@/helpers/billing";
import Link from "next/link";

const prisma = new PrismaClient();

export const stripe = new Stripe(String(process.env.STRIPE_SECRET), {
  apiVersion: "2023-08-16",
});

export default async function Billing() {
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
  const subStartDate = await getSubscriptionStartDate();

  if (!user) {
    return <h1>Error</h1>;
  }

  if (!session) {
    return <h1>Error</h1>;
  }

  return (
    <div className="relative mt-40 mb-40">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold">Manage Billing</h2>
        </div>
        <div className="flex flex-col mb-6">
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-4">Profile</h3>
            <div className="flex items-center mb-4">
              <Image
                src={"" + user.image}
                width={500}
                height={500}
                alt="user profile"
                className="w-16 h-16 rounded-full mr-4"
              />

              <div>
                <h4 className="text-gray-800 text-lg">{user.name}</h4>
                <p className="text-gray-600">{user.email}</p>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Subscription</h3>
            <div className="mb-2">
              <p className="text-gray-800">
                {hasSub ? "Free Tier" : "Pro Tier"}
              </p>
            </div>
            <div className="mb-4"></div>
            <Link
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              href={"" + checkoutLink}
            >
              {hasSub ? "Upgrade To Pro" : "Manage Subscription"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
