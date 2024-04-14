"use server";

import { getSession } from "@/lib/auth";
import { deleteRoom, getRoom } from "../data-access/rooms";
import { revalidatePath } from "next/cache";

export async function deleteRoomAction(roomId: string) {
  const session = await getSession();
  if (!session) {
    throw new Error("No session found");
  }

  const room = await getRoom(roomId);
  if (room?.userId !== session.user.id) {
    throw new Error("You are not authorized to delete this room");
  }

  await deleteRoom(roomId);
  revalidatePath("/your-rooms");
}
