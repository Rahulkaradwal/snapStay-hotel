import DescriptionFooter from "../components/details/DescriptionFooter";
import Details from "../components/rooms/Details";
import RoomList from "../components/rooms/RoomList";
import Footer from "../ui/Footer";

function Rooms() {
  return (
    <>
      <div className="bg-dark grid grid-cols-2 gap-6 px-10 pt-20">
        <Details />
        <RoomList />
      </div>
      <DescriptionFooter />
      <Footer />
    </>
  );
}

export default Rooms;
