import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingApi } from "../apiCheckin";
import toast from "react-hot-toast";

function useDeleteBooking() {
  const queryClient = useQueryClient();
  const { mutate: deleteBooking, error, isPending } = useMutation({
    mutationFn: (id: string) => deleteBookingApi(id),
    mutationKey: ["deleteBooking"],
    onSuccess: () => {
      toast.success("Successfully deleted booking");
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },
    onError: () => {
      toast.error("Something went wrong while deleting the booking");
    },
  });
  return { deleteBooking, error ,isPending };
}

export default useDeleteBooking;
