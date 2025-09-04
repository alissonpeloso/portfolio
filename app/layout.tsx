import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Suspense } from 'react';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import Script from 'next/script';

export const metadata: Metadata = {
    title: 'Alisson Luan de Lima Peloso - Full-Stack Developer & Tech Lead',
    description:
        'Computer Science graduate with 4+ years of full-stack development experience. Tech Lead specializing in PHP, Laravel, Vue, and cloud solutions.',
    icons: {
        icon: [
            { url: './favicon.svg', type: 'image/svg+xml' },
            { url: './favicon.ico', sizes: '32x32' },
        ],
        shortcut: './favicon.ico',
        apple: './apple-touch-icon.png',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className="scroll-smooth" suppressHydrationWarning>
        <head>
            <Script
                id="gtm"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','GTM-PQWX3H4B');
                    `,
                }}
            />
        </head>
        <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <noscript>
            <iframe
                src="https://www.googletagmanager.com/ns.html?id=GTM-PQWX3H4B"
                height="0"
                width="0"
                style={{ display: 'none', visibility: 'hidden' }}
            />
        </noscript>
        <Suspense fallback={null}> <ThemeProvider attribute="class">{children}</ThemeProvider> </Suspense>
        </body>
        </html>
    );
}
