import type { Metadata } from "next";
import "./globals.css";
import UpdateContextProvider from "@/context/UpdateContext";
import UpdateValueContextProvider from "@/context/UpdateValue";
import TodoListProvider from "@/context/AddTodoContext";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Todo list application",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TodoListProvider>
          <UpdateContextProvider>
            <UpdateValueContextProvider>
              <Toaster reverseOrder={false} />
              {children}
            </UpdateValueContextProvider>
          </UpdateContextProvider>
        </TodoListProvider>
      </body>
    </html>
  );
}
