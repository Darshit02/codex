"use client"
import { TagList } from "@/components/tags-list";
import { spiltTags } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Room } from "@/db/schema";
import { LucideGithub, Pencil, PencilLine, Trash2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { deleteRoomAction } from "./actions";

export function UserRoomCard({ room }: { room: Room }) {
  return (
    <Card className="dark:text-gray-200 text-gray-900">
      <CardHeader className="relative">
        <Button size="icon" className="absolute top-2 right-2">
          <Link href={`/edit-room/${room.id}`}>
          <PencilLine />
          </Link>
        </Button>
        <CardTitle>{room.name}</CardTitle>
        <CardDescription>{room.description}</CardDescription>
      </CardHeader>
      <CardContent className="">
        {room.githubRepo && (
          <Link
            href={room.githubRepo}
            className="flex items-center gap-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LucideGithub className="border-2 rounded-full p-2 h-10 w-10 dark:text-black dark:bg-white bg-gray-900 text-white" />
            Github Project
          </Link>
        )}
      </CardContent>
      <CardContent className="flex flex-wrap gap-2">
        <TagList tags={spiltTags(room.language)} />
      </CardContent>
      <CardFooter className="flex gap-3">
        <Button asChild>
          <Link href={`/rooms/${room.id}`}>Join Room</Link>
        </Button>


        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive">
              <Trash2 className="w-5" /> Delete Room
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your account
                and remove your room from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={() => { 
                deleteRoomAction(room.id);
              }}>Yes, Delete</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

      </CardFooter>
    </Card>
  );
}
