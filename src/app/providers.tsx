"use client";

import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
type Props = {
  children?: React.ReactNode;
};

export const NextAuthProvider = ({ children }: Props) => {
  return (
    <SessionProvider>
      <ThemeProvider attribute="class" enableSystem={false}>
        {children}
      </ThemeProvider>
    </SessionProvider>
  );
};
