import BookingList from "../components/bookings/BookingList";

function Booking() {
  return (
    <>
      <div className="h-screen overflow-hidden overflow-y-scroll bg-dark">
        <BookingList />
      </div>
    </>
  );
}

export default Booking;
