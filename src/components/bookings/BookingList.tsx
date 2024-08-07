import { Spinner } from "flowbite-react";
import useMyBookings from "../../api/Booking/useMyBookings";
import BookingItem from "./BookingItem";

// type Booking = {
//   _id: string;
// };

function BookingList() {
  const { data, isLoading, error } = useMyBookings();
  if (!isLoading && !error && data?.data.length === 0) {
    return (
      <div className="h-fit justify-center bg-ligthDark py-[13.5rem] text-center text-2xl text-slate-50">
        No Bookings Found
      </div>
    );
  }

  return (
    <div className="h-fit bg-dark py-20">
      {isLoading && (
        <div className="h-fit justify-center py-40 text-center text-2xl text-slate-50">
          <Spinner color="warning" size="xl" />
        </div>
      )}
      {error ? (
        <div className="h-fit justify-center py-40 text-center text-2xl text-slate-50">
          {error
            ? "Some Error Occured, Please try again!"
            : "Sorry! No Booking Found"}
        </div>
      ) : (
        <>
          {!isLoading &&
            !error &&
            data?.data.map((Booking) => (
              <BookingItem key={Booking._id} Booking={Booking} />
            ))}
        </>
      )}
    </div>
  );
}

export default BookingList;
