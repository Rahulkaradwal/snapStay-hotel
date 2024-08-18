import { useMutation, useQueryClient } from "@tanstack/react-query";
import { checkinBookingApi } from "../apiCheckin";
import toast from "react-hot-toast";

function useCheckin() {
  const queryClient = useQueryClient();
  const { mutate: checkin, error, isPending } = useMutation({
    mutationFn: (id: string) => checkinBookingApi(id),
    mutationKey: ["checkin"],
    onSuccess: () => {
      queryClient.invalidateQueries(); // Invalidate all query
      toast.success("Successfully checked in booking");
    },
    onError: () => {
      toast.error("Something went wrong while checking in the booking");
    },
  });

  return { checkin, error , isPending};
}

export default useCheckin;
