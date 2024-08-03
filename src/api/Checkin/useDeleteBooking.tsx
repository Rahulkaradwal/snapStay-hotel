import { useMutation } from "@tanstack/react-query";
import { deleteBooking as deleteBookingApi } from "../apiCheckin";
import toast from "react-hot-toast";

function useDeleteBooking() {
  const { mutate: deleteBooking, error } = useMutation({
    mutationFn: (id: string) => deleteBookingApi(id),
    mutationKey: ["deleteBooking"],
    onSuccess: () => {
      toast.success("Successfully deleted booking");
    },
    onError: () => {
      toast.error("Something went wrong while deleting the booking");
    },
  });
  return { deleteBooking, error };
}

export default useDeleteBooking;
