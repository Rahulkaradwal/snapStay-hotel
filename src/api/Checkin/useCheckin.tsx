import { useMutation, useQueryClient } from "@tanstack/react-query";
import { checkinBookingApi } from "../apiCheckin";
import toast from "react-hot-toast";

function useCheckin() {
  const queryClient = useQueryClient();
  const { mutate: checkin, error } = useMutation({
    mutationFn: (id: string) => checkinBookingApi(id),
    mutationKey: ["checkin"],
    onSuccess: (_, id) => {
      console.log("in the useCheckin", id);
      queryClient.invalidateQueries({ queryKey: ["bookingDetail", id] }); // Invalidate the specific booking query
      toast.success("Successfully checked in booking");
    },
    onError: () => {
      toast.error("Something went wrong while checking in the booking");
    },
  });

  return { checkin, error };
}

export default useCheckin;
