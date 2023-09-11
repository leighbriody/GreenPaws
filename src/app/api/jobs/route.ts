import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { NextResponse } from "next/server";
type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const session = await getServerSession(authOptions);

  //Protect api route
  if (!session) {
    return NextResponse.json({ message: "You are not authenticated" });
  }

  res.status(200).json({ message: "Hello from Next.js!" });
}
