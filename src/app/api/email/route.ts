import { Resend } from "resend";
import { NextResponse } from "next/server";
import SupportEmailTemplate from "../../../../emails/SupportEmailTemplate";
const resend = new Resend(process.env.RESEND_API_KEY);
const emailRecipient = process.env.REACT_EMAIL_RECIPIENT;

export async function POST(request: Request) {
  try {
    const { email, subject, message } = await request.json();

    if (!email || !subject || !message) {
      return NextResponse.json(
        { status: "error", message: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!emailRecipient) {
      return NextResponse.json(
        { status: "error", message: "Missing recipient for env" },
        { status: 400 }
      );
    }

    const emailResponse = await resend.sendEmail({
      from: "onboarding@resend.dev",
      to: emailRecipient,
      subject,
      react: SupportEmailTemplate({
        from: email,
        subject,
        message,
      }),
    });

    if (emailResponse) {
      return NextResponse.json({ status: "OK" });
    } else {
      return NextResponse.json(
        { status: "error", message: "Failed to send email" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error in API route:", error);
    return NextResponse.json(
      { status: "error", message: "Internal server error" },
      { status: 500 }
    );
  }
}
