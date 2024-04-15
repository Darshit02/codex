import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getRooms } from "@/app/data-access/rooms";
import { SearchBar } from "./search-bar";
import { RoomCard } from "@/components/room-card";
import { unstable_noStore } from "next/cache";


export default async function Home({
  searchParams,
}: {
  searchParams: {
    search: string;
  };
}) {
  unstable_noStore()
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
