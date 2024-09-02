"use client";

import { SessionProvider } from "next-auth/react";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { ThemeProvider } from "@/components/theme-provider";
import StoreProvider from "./redux";
import React from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <StoreProvider>
      <SessionProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <ProgressBar
            height="4px"
            color="#f97316"
            options={{ showSpinner: false }}
            shallowRouting
          />
        </ThemeProvider>
      </SessionProvider>
    </StoreProvider>
  );
}
