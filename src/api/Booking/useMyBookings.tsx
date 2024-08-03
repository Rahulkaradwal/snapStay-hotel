import { useQuery } from "@tanstack/react-query";
import { getMyBookings } from "../apiBooking";

function useMyBookings() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["bookings"],
    queryFn: () => getMyBookings(),
  });

  return { data, isLoading, error };
}

export default useMyBookings;
