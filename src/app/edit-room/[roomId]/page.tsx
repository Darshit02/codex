import React from "react";
import { EditRoomForm } from "./edit-room-form";
import { getRoom } from "@/app/data-access/rooms";
import { unstable_noStore } from "next/cache";

export default async function Page({params} : {
  params : {
    roomId : string
  }
}) {
unstable_noStore()
  const room = await getRoom(params.roomId);
  if(!room) {
    return <div>Room not found</div>
  }
  return (
    <div className="container mx-auto flex flex-col gap-8 pt-12 pb-24">
      <div className="text-4xl font-bold">Edit Room</div>
      <EditRoomForm room={room} />
    </div>
  );
}
