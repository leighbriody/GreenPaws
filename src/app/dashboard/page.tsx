import React from "react";

import Stripe from "stripe";
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

export const stripe = new Stripe(String(process.env.STRIPE_SECRET), {
  apiVersion: "2023-08-16",
});

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
    <>
      <Link href={"" + manageLink}>Manage Billing</Link>
      {hasSub ? (
        <div>Subscribed</div>
      ) : (
        <div>
          {" "}
          <Link href={"" + checkoutLink}>Upgrade</Link>
        </div>
      )}
    </>
  );
}
