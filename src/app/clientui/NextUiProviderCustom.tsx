"use client";
import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
type nextuiprovidercustomProps = {
  children: React.ReactNode;
};
export const NextUiProviderCustom = ({
  children,
}: nextuiprovidercustomProps) => {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">{children}</NextThemesProvider>
    </NextUIProvider>
  );
};
