import { Button } from "@/components/ui/button";
import Link from "next/link";
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
import { getRooms } from "@/app/data-access/rooms";
import { Badge } from "@/components/ui/badge";
import { TagList, spiltTags } from "@/components/tags-list";
import { SearchBar } from "./search-bar";


function RoomCard({ room }: { room: Room }) {
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

export default async function Home({
  searchParams,
}: {
  searchParams: {
    search: string;
  };
}) {
  const rooms = await getRooms(searchParams.search);
  return (
    <main className="min-h-screen p-24">
      
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl">Find Developer's Room</h1>
        <Button asChild>
          <Link href="/create-room">Create Room</Link>
        </Button>
      </div>
      <SearchBar/>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {rooms.map((room) => {
          return <RoomCard key={room.id} room={room} />;
        })}
      </div>
    </main>
  );
}
