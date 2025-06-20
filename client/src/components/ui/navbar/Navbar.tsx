import { NAVBAR_HEIGHT } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../button";

export default function Navbar() {
  return (
    <div
      className="fixed top-0 left-0 w-full z-50 shadow-xl"
      style={{ height: `${NAVBAR_HEIGHT}px` }}
    >
      <div className="flex justify-between items-center w-full py-3 px-8 bg-primary-700 text-white">
        <div className="flex items-center ga md:gap-4">
          <Link
            href="/"
            className="cursor-pointer hover:!text-primary-300"
            scroll={false}
          >
            <div className="flex items-center gap-3">
              <Image
                src="/logo.svg"
                alt="logo"
                className="w-6 h-6"
                width={24}
                height={24}
              />
              <div className="text-xl font-bold">
                RENT
                <span className="text-secondary-500 font-light hover:!text-red-600">
                  SPACE
                </span>
              </div>
            </div>
          </Link>
        </div>
        <p className="text-primary-200 hidden md:block">
          Best place for your vacation
        </p>
        <div className="flex items-center gap-5">
          <Link href={"/signin"}>
            <Button
              variant={"outline"}
              className="text-primary-100  cursor-pointer  border-white bg-transparent hover:text-primary-700 rounded-lg"
            >
              Sign In
            </Button>
          </Link>
          <Link href={"/signup"}>
            <Button
              variant={"outline"}
              className="text-primary-100  cursor-pointer rounded-lg  bg-secondary-600 hover:bg-secondary-50 hover:text-primary-700 "
            >
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
