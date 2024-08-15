import RoomMain from "../components/rooms/RoomMain";
import Footer from "../ui/Footer";

function Rooms() {
  return (
    <div className="overflow-hidden">
      <div className="grid w-full grid-cols-2 gap-6 bg-dark px-10 pt-20"></div>
      <RoomMain />

      <Footer />
    </div>
  );
}

export default Rooms;
