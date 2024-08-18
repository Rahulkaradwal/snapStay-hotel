import { useQuery } from "@tanstack/react-query";
import { BookingType } from "../types";
import { getBookingApi } from "../apiBooking";

function useGetBooking(id: string) {
  const { isPending : isLoading, data, error } = useQuery<BookingType, Error>({
    queryFn: ({ queryKey }) => getBookingApi(queryKey[1] as string),
    queryKey: ["bookingDetail", id],
  });

  return { isLoading, data, error };
}

export default useGetBooking;
