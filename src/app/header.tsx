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
import { DeleteIcon, LogInIcon, LogOutIcon, Power, Terminal } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function ProfileDropdown() {
  const session = useSession();
  const isLoggedIn = !!session.data;
  return (
    <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="ghost">
        <Avatar className="mr-2">
          <AvatarImage src={session.data?.user?.image ?? ""} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        {session.data?.user?.name}
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem
        onClick={() =>
          signOut({
            callbackUrl: "/",
          })
        }
      >
        <LogOutIcon className="mr-2" /> Sign Out
      </DropdownMenuItem>

      {/* <DropdownMenuItem
        onClick={() => {
          setOpen(true);
        }}
      >
        <DeleteIcon className="mr-2" /> Delete Account
      </DropdownMenuItem> */}
    </DropdownMenuContent>
  </DropdownMenu>
  )
}

export function Header() {
const session = useSession();
const isLoggedIn = !!session.data;

return (
<header className="bg-gray-100 py-2 dark:bg-gray-900 z-10 relative">
  <div className="container mx-auto flex justify-between items-center">
    <Link
      href="/"
      className="flex gap-2 items-center text-xl hover:underline"
    >
      <Terminal className="mr-2" />
      CodeX
    </Link>

    <nav className="flex gap-8">
      {isLoggedIn && (
        <>
          <Link className="hover:underline" href="/browse">
            Browse
          </Link>

          <Link className="hover:underline" href="/your-rooms">
            Your Rooms
          </Link>
        </>
      )}
    </nav>

    <div className="flex items-center gap-4">
      {isLoggedIn && <ProfileDropdown />}
      {!isLoggedIn && (
        <Button onClick={() => signIn()} variant="outline">
          <LogInIcon className="mr-2" /> Sign In
        </Button>
      )}
      <ModeToggle />
    </div>
  </div>
</header>
);
}