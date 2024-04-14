import { getRoom } from "@/app/data-access/rooms";
import { TagList } from "@/components/tags-list";
import { Badge } from "@/components/ui/badge";
import { LucideGithub } from "lucide-react";
import Link from "next/link";
import { CodeXVideo } from "./video-player";
import { spiltTags } from "@/lib/utils";

export default async function RoomPage(props: { params: { roomId: string } }) {
  const roomId = props.params.roomId;
  
  const room = await getRoom(roomId);

  if (!room) {
    return <div>Room not found</div>;
  }

 const tags = spiltTags(room.language);

  return (
    <div className="grid grid-cols-4 min-h-screen text-gray-900">
      <div className="col-span-3 p-4 pr-4">
        <div className="rounded-sm border text-card-foreground shadow-md  p-4">
          <CodeXVideo 
            room={room}
          />
        </div>
      </div>
      <div className="col-span-1  p-4 pl-2">
        <div className="rounded-sm border text-card-foreground shadow-md p-4 flex flex-col gap-4">
          <h1 className="text-base">{room?.name}</h1>
          {room?.githubRepo && (
            <Link
              href={room?.githubRepo}
              className="flex items-center gap-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LucideGithub className="border-2 rounded-full p-2 h-10 w-10 dark:text-black dark:bg-white bg-gray-900 text-white" />
              Github Project
            </Link>
          )}
          <p className="text-base text-gray-700">{room?.description}</p>
          <div className="flex flex-wrap gap-2">
          
            <TagList tags={tags} />
          </div>
        </div>
      </div>
    </div>
  );
}
