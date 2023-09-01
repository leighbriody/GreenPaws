import { LoginButton } from "@/components/buttons";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { User } from "@/components/user";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return <div></div>;
}
