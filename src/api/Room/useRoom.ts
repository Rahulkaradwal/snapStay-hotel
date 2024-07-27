import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getRoom, Cabin } from "../apiRoom";

function useRoom() {
  const { roomId } = useParams<{ roomId: string }>();

  const { data, isLoading, error } = useQuery<Cabin, Error>({
    queryKey: ["roomId", roomId],
    queryFn: () => {
      if (!roomId) {
        return Promise.reject(new Error("roomId is undefined"));
      }
      return getRoom(roomId);
    },
    enabled: !!roomId, // Disable query if roomId is undefined
  });

  return { data, isLoading, error };
}

export default useRoom;
