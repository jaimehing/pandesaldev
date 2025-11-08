import type { Metadata } from "next";
import {
  Darker_Grotesque,
  Dela_Gothic_One,
  DM_Mono,
  Ubuntu_Mono,
} from "next/font/google";
import "./globals.css";

const grotesqueFont = Darker_Grotesque({
  variable: "--font-darker-grotesque",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const daleGothicOneFont = Dela_Gothic_One({
  variable: "--font-dela-gothic-one",
  subsets: ["latin"],
  weight: ["400"],
});

const dmMonoFont = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400"],
});

const ubuntuMonoFont = Ubuntu_Mono({
  variable: "--font-ubuntu-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Pandev - Community of Filipino Software Developers",
  description:
    "Pandev - A Community of Filipino Software Developers. Where the fun tech talks take place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="data:image/png;base64,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"
        ></link>
      </head>
      <body
        className={`${grotesqueFont.variable} ${daleGothicOneFont.variable} ${dmMonoFont.variable} ${ubuntuMonoFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
