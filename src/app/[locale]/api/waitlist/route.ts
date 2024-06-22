import { NextRequest, NextResponse } from "next/server";
import { sendWaitlistEmail } from "../../../utils/mailService";

export const POST = async (req: NextRequest) => {
  try {
    const { email } = await req.json();

    // Add the email and name to your database or waitlist storage
    // For example purposes, we'll just send the email
    await sendWaitlistEmail(email);

    return NextResponse.json(
      { message: "Congratulations! You have been added to the waitlist" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
};
