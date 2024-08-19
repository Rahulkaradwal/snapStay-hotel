import BookingList from "../components/bookings/BookingList";
import Footer from "../ui/Footer";

function Booking() {
  return (
    <>
      <div className="h-full  overflow-hidden bg-ligthDark">
        <BookingList />
      </div>
      <Footer />
    </>
  );
}

export default Booking;
