import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Todo list app",
  description: "Todolist app for managing your schedule",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
