import { useQuery } from "@tanstack/react-query";
import { getMyBookings } from "../apiBooking";
import { BookingResponse } from "../types";

function useMyBookings() {
  const { data, isLoading, error } = useQuery<BookingResponse, Error>({
    queryKey: ["bookings"],
    queryFn: getMyBookings,
  });

  return { data, isLoading, error };
}

export default useMyBookings;
