import Cover from "../components/details/Cover";
import Description from "../components/details/Description";
import FloatButton from "../components/details/FloatButton";
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
