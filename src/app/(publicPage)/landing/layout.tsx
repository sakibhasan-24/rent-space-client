import { NAVBAR_HEIGHT } from "@/lib/constants";
import React from "react";
interface Children {
  children: React.ReactNode;
}
export default function Layout({ children }: Children) {
  return (
    <div>
      {/* <Navbar /> */}
      <main className={`h-full w-full flex flex-col pt-[${NAVBAR_HEIGHT}px]`}>
        {children}
      </main>
    </div>
  );
}
