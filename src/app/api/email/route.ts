import { Resend } from "resend";
import SupportEmail from "../../../../emails/SupportEmail";
import { NextResponse } from "next/server";
const resend = new Resend("re_fQE6e8TQ_PdDTy6bYFkFyrS2Wtyt6GoZd");

export async function POST(request: Request) {
  const { email } = await request.json();
  resend.sendEmail({
    from: email,
    to: "lbriody10@gmail.com",
    subject: "subject",
    react: SupportEmail({
      from: email,
      subject: "Subject",
      message: "message ",
    }),
  });

  return NextResponse.json({ status: "OK" });
}
