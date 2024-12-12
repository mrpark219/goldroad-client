import type { Metadata } from 'next';
import localFont from 'next/font/local';
import React from 'react';
// import Header from './components/header';
import './globals.css';
import ReactQueryProvider from './providers/ReactQueryProvider';

// const geistSans = localFont({
//   src: './fonts/GeistVF.woff',
//   variable: '--font-geist-sans',
//   weight: '100 900',
// });
// const geistMono = localFont({
//   src: './fonts/GeistMonoVF.woff',
//   variable: '--font-geist-mono',
//   weight: '100 900',
// });
const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${pretendard.variable} font-pretendard antialiased w-full flex flex-col justify-center items-center`}
      >
        <ReactQueryProvider>
          {/* <Header /> */}
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
