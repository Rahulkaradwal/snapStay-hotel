import { Spinner } from "flowbite-react";
import useMyBookings from "../../api/Booking/useMyBookings";
import BookingItem from "./BookingItem";

// type Booking = {
//   _id: string;
// };

function BookingList() {
  const { data, isLoading, error } = useMyBookings();
  console.log(data.data);
  let Bookings = [];
  if (!isLoading) {
    Bookings = data?.data;
  }
  return (
    <div className="h-fit bg-dark py-20">
      {error && <div>Error: {error.message}</div>}
      {isLoading && <Spinner color="warning" size="xl" />}
      {Bookings.map((booking) => (
        <BookingItem key={booking._id} booking={booking} />
      ))}
    </div>
  );
}

export default BookingList;
