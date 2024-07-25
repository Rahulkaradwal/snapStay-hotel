import Cover from "../components/details/Cover";
import Description from "../components/details/Description";
import Footer from "../ui/Footer";
const Detail = () => {
  return (
    <>
      <div className="relative overflow-hidden">
        <Cover />
        <Description />
      </div>
      <Footer />
    </>
  );
};

export default Detail;
