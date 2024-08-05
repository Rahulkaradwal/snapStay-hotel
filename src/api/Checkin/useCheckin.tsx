import { useMutation, useQueryClient } from "@tanstack/react-query";
import { checkinBookingApi } from "../apiCheckin";
import toast from "react-hot-toast";

function useCheckin() {
  const queryClient = useQueryClient();
  const { mutate: checkin, error } = useMutation({
    mutationFn: (id: string) => checkinBookingApi(id),
    mutationKey: ["checkin"],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },
    onError: () => {
      toast.error("Something went wrong while checking in the booking");
    },
  });

  return { checkin, error };
}

export default useCheckin;
