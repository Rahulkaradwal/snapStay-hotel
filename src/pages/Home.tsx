import Carousel from "../components/home/Carousel";
import room1 from "/rooms/asthetic-room.jpg";
import room2 from "/rooms/beachview.jpg";
import room3 from "/rooms/lobby-sofa.jpg";
import room4 from "/rooms/outdoor.jpg";
import room5 from "/rooms/mountain.jpg";
import Footer from "../ui/Footer";
import MenuItems from "../components/Services/MenuItems";

function Home() {
  return (
    <div>
      <section className="h-screen">
        <Carousel images={[room1, room2, room3, room4, room5]} />
      </section>
      <MenuItems />
      <Footer />
    </div>
  );
}

export default Home;
