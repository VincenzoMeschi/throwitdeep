import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
	const { formData } = await request.json();

	const transporter = nodemailer.createTransport({
		host: process.env.SMTP_HOST,
		port: Number(process.env.SMTP_PORT),
		secure: process.env.SMTP_SECURE === "true",
		auth: {
			user: process.env.SMTP_USER,
			pass: process.env.SMTP_PASSWORD,
		},
	});

	const textBody = Object.entries(formData)
		.map(([key, val]) => `${key}: ${val}`)
		.join("\n");

	const htmlBody = Object.entries(formData)
		.map(([key, val]) => `<p><strong>${key}</strong>: ${val}</p>`)
		.join("");

	try {
		await transporter.sendMail({
			from: `"Contact Form" <${process.env.SMTP_FROM}>`,
			to: process.env.CONTACT_EMAIL,
			subject: `New message from ${formData.firstName} ${formData.lastName}`,
			text: textBody,
			html: htmlBody,
			replyTo: formData.email,
		});

		return NextResponse.json({ success: true });
	} catch (err) {
		console.error(err);
		return NextResponse.json(
			{
				error:
					err instanceof Error
						? err.message
						: "An unknown error occurred",
			},
			{ status: 500 }
		);
	}
}
