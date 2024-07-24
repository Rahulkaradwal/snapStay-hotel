import DescriptionFooter from "../components/details/DescriptionFooter";
import Details from "../components/rooms/Details";
import RoomList from "../components/rooms/RoomList";
import Footer from "../ui/Footer";

function Rooms() {
  return (
    <>
      <div className="grid grid-cols-2 gap-6 bg-gray-900 px-10 pt-20">
        <Details />
        <RoomList />
      </div>
      <DescriptionFooter />
      <Footer />
    </>
  );
}

export default Rooms;
