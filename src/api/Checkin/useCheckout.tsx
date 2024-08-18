import { useMutation, useQueryClient } from "@tanstack/react-query";
import { checkoutBookingApi } from "../apiCheckin";
import toast from "react-hot-toast";

function useCheckout() {
  const queryClient = useQueryClient();
  const { mutate: checkout, error ,isPending } = useMutation({
    mutationFn: (id: string) => checkoutBookingApi(id),
    mutationKey: ["checkout"],
    onSuccess: () => {
      toast.success("Successfully checked out booking");
      queryClient.invalidateQueries(); // Invalidate all query
    },
    onError: () => {
      toast.error("Something went wrong while checking out the booking");
    },
  });

  return { checkout, error, isPending };
}

export default useCheckout;
