import Carousel from "../ui/Carousel";
import room1 from "/rooms/asthetic-room.jpg";
import room2 from "/rooms/beachview.jpg";
import room3 from "/rooms/lobby-sofa.jpg";
import room4 from "/rooms/outdoor.jpg";
import room5 from "/rooms/mountain.jpg";
import AboutUs from "../ui/AboutUs";
import SpecialPackage from "../ui/SpecialPackage";

function Home() {
  return (
    <div>
      <section className="h-screen">
        <Carousel images={[room1, room2, room3, room4, room5]} />
      </section>
      {/* <AboutUs /> */}
      <SpecialPackage />
    </div>
  );
}

export default Home;
