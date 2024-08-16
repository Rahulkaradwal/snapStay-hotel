import Cover from "../components/Services/Cover";
import MenuItems from "../components/Services/MenuItems";
import Footer from "../ui/Footer";

function Services() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <Cover />
      <MenuItems />
      <Footer />
    </div>
  );
}

export default Services;
