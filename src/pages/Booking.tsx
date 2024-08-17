import BookingList from "../components/bookings/BookingList";
import Footer from "../ui/Footer";

function Booking() {
  return (
    <>
      <div className="h-screen overflow-hidden bg-ligthDark">
        <BookingList />
      </div>
      <Footer />
    </>
  );
}

export default Booking;
