import React from "react";
import { PrismaClient } from "@prisma/client";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Stripe from "stripe";
import {
  createCheckoutLink,
  createCustomerIfNull,
  generateCustomerPortalLink,
  hasSubscription,
} from "@/helpers/billing";
import Link from "next/link";
import ManageBillingModal from "./ManagebillingModal";

const prisma = new PrismaClient();

export default async function Billing() {
  const stripe = new Stripe(String(process.env.STRIPE_SECRET), {
    apiVersion: "2023-08-16",
  });

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

  if (!user) {
    return <h1>Error</h1>;
  }

  if (!session) {
    return <h1>Error</h1>;
  }

  return (
    <ManageBillingModal
      userImage={"" + user.image}
      userEmail={"" + user.email}
      userName={"" + user.name}
      hasSub={hasSub}
      manageLink={"" + manageLink}
      checkoutLink={"" + checkoutLink}
    />
  );
}
