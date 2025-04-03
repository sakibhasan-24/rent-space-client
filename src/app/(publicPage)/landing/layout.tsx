import Navbar from "@/components/ui/navbar/Navbar";
import { NAVBAR_HEIGHT } from "@/lib/constants";
import React from "react";
interface Children {
  children: React.ReactNode;
}
export default function Layout({ children }: Children) {
  return (
    <div className="h-full w-full">
      <Navbar />
      <main
        className={`h-full w-full flex flex-col`}
        style={{ paddingTop: `${NAVBAR_HEIGHT}px` }}
      >
        {children}
      </main>
    </div>
  );
}
