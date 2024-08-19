import { useMutation, useQueryClient } from "@tanstack/react-query";
import { cancelBookingApi } from "../apiBooking";
import toast from "react-hot-toast";

function useCancelBooking() {
  const queryClient = useQueryClient();
  const {
    mutate: cancelBooking,
    error,
    isPending,
  } = useMutation({
    mutationFn: (id: string) => cancelBookingApi(id),
    mutationKey: ["cancelBooking"],
    onSuccess: () => {
      toast.success("Successfully cancelled booking");
      queryClient.invalidateQueries();
    },
    onError: () => {
      toast.error("Something went wrong while cancelling the booking");
    },
  });

  return { cancelBooking, error, isPending };
}
export default useCancelBooking;
