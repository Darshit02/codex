"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Power, Terminal } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function ProfileDropdown() {
  const session = useSession();
  const isLoggedIn = !!session.data;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={"ghost"}
          className="flex justify-center items-center gap-3"
        >
          <Avatar>
            <AvatarImage src={session.data?.user?.image!} alt="none" />
            <AvatarFallback>{session.data?.user?.name || ""}</AvatarFallback>
          </Avatar>
          {session.data?.user?.name || ""}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-3">
        {/* <DropdownMenuSeparator /> */}
        {isLoggedIn ? (
          <DropdownMenuItem
            onClick={() => signOut()}
            className="flex justify-center items-center gap-2"
          >
            <Power className="h-4 w-4" /> Sign Out
          </DropdownMenuItem>
        ) : (
          <DropdownMenuItem onClick={() => signIn("google")}>
            Sign In
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export const Header = () => {
  return (
    <header className=" bg-gray-100 dark:bg-gray-900 py-4 px-10">
      <div className="flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center justify-center gap-4">
            <Terminal />
            <span className="text-gray-900 font-semibold text-xl dark:text-white">
              
              CodeX
              </span>
          </div>
        </Link>
        <div className="flex justify-center items-center gap-4">
          <ProfileDropdown />
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};
