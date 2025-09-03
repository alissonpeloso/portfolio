import type React from 'react';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Suspense } from 'react';
import './globals.css';

export const metadata: Metadata = {
    title: 'Alisson Luan de Lima Peloso - Full-Stack Developer & Tech Lead',
    description:
        'Computer Science graduate with 4+ years of full-stack development experience. Tech Lead specializing in PHP, Laravel, Vue, and cloud solutions.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className="dark">
        <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        </body>
        </html>
    );
}
