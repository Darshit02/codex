import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getRooms } from "@/app/data-access/rooms";
import { SearchBar } from "./search-bar";
import { RoomCard } from "@/components/room-card";
import { unstable_noStore } from "next/cache";
import Image from "next/image";


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
      {
        rooms.length === 0 && (
          <div className="flex justify-center items-center flex-col mt-24 gap-4">
            <Image 
            src="/no-data.svg"
            alt="No data"
            width={300}
            height={300}
            />
            <h2 className="text-muted-foreground text-2xl">No Rooms Live Yet!</h2>
          </div>
        )
      }
    </main>
  );
}
