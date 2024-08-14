import { useMutation, useQueryClient } from "@tanstack/react-query";
import { checkoutBookingApi } from "../apiCheckin";
import toast from "react-hot-toast";

function useCheckout() {
  const queryClient = useQueryClient();
  const { mutate: checkout, error } = useMutation({
    mutationFn: (id: string) => checkoutBookingApi(id),
    mutationKey: ["checkout"],
    onSuccess: (_, id) => {
      toast.success("Successfully checked out booking");
      queryClient.invalidateQueries({
        queryKey: ["bookingDetail", "bookings", id],
      }); // Invalidate the specific booking query
    },
    onError: () => {
      toast.error("Something went wrong while checking out the booking");
    },
  });

  return { checkout, error };
}

export default useCheckout;
