
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
  import { LucideGithub } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export function RoomCard({ room }: { room: Room }) {
    return (
      <Card className="dark:text-gray-200 text-gray-900">
        <CardHeader>
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
        <CardFooter>
          <Button asChild>
            <Link href={`/rooms/${room.id}`}>Join Room</Link>
          </Button>
        </CardFooter>
      </Card>
    );
  }
  