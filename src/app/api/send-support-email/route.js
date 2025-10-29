import { NextResponse } from "next/server";
import { transporter } from "../../[locale]/config/nodemailer";
import { supportEmailTempelates, userEmailTempelates } from "./templates";

const generateEmailContent = (data) => ({
  subject: "Contact Form Submission from GMG Website",
  html: userEmailTempelates(data),
});

const generateSupportEmailContent = (data) => ({
  subject: "Contact Form Submission from GMG Website",
  html: supportEmailTempelates(data),
});

export async function POST(req) {
  try {
    const reqBody = await req.json();
    const content = generateEmailContent(reqBody);
    const supportEmail = generateSupportEmailContent(reqBody);
    const emailSender = {
      from: "portal@mx4.gtcmail.com",
      to: reqBody?.workEmail,
    };

    const supportSender = {
      from: "portal@mx4.gtcmail.com",
      to: "support@gmgprime.com",
    };

    const emailPayload = {
      ...emailSender,
      ...content,
    };
    const supportEmailPayload = {
      ...supportSender,
      ...supportEmail,
    };

    await transporter.sendMail(emailPayload);
    await transporter.sendMail(supportEmailPayload);

    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    console.error("Email Error:", error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
