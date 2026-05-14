'use server';

import { Resend } from 'resend';
import { headers } from 'next/headers';

const resend = new Resend(process.env.RESEND_API_KEY);

const LIMIT = 3;
const WINDOW_MS = 60 * 60 * 1000; // 1 hour

const attempts = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = attempts.get(ip);
  if (!entry || now > entry.resetAt) {
    attempts.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  if (entry.count >= LIMIT) return true;
  entry.count++;
  return false;
}

export async function sendEmail(data: { name: string; email: string; message: string }) {
  const ip = (await headers()).get('x-forwarded-for') ?? 'unknown';
  if (isRateLimited(ip)) {
    throw new Error('Too many messages. Please wait an hour before trying again.');
  }

  const { name, email, message } = data;

  const { error } = await resend.emails.send({
    from: 'Portfolio Contact <onboarding@resend.dev>',
    to: 'azizakturin@gmail.com',
    replyTo: email,
    subject: `Message from ${name}`,
    text: `From: ${name}\nEmail: ${email}\n\n${message}`,
  });

  if (error) throw new Error(error.message);
}
