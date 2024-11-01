import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import  ContactForm  from '@/types/contact';

export async function POST(request: Request) { 
    try {
        const body: ContactForm = await request.json();
        const { name, email, subject, message } = body;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.RECIPIENT_EMAIL,
            subject: `Portfolio Contact: ${subject}`,
            html: `
                <h3>New Contact Form Submission</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: 'Email sent successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Failed to send email:', error);
        return NextResponse.json(
            { message: 'Failed to send email' },
            { status: 500 }
        );
    }
}