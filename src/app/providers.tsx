"use client";
import StoreProvider from "@/state/redux";

interface ProvidersProps {
  children: React.ReactNode;
}
export const Providers: React.FC<ProvidersProps> = ({
  children,
}: ProvidersProps) => {
  return <StoreProvider>{children}</StoreProvider>;
};
