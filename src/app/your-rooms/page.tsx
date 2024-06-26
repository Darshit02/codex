import { Button } from "@/components/ui/button";
import Link from "next/link";

import {  getUserRooms } from "@/app/data-access/rooms";
import { RoomCard } from "@/components/room-card";
import { UserRoomCard } from "./room-card";
import { unstable_noStore } from "next/cache";




export default async function YourRoomsPage() {
  unstable_noStore()
  const rooms = await getUserRooms();
  return (
    <main className="min-h-screen p-24">
      
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl">Your Rooms</h1>
        <Button asChild >
          <Link href="/create-room">Create Room</Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {rooms.map((room) => {
          return <UserRoomCard key={room.id} room={room} />;
        })}
      </div>
    </main>
  );
}
