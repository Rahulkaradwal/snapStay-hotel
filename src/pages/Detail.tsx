import Cover from "../components/details/Cover";
import Description from "../components/details/Description";
import FloatButton from "../components/details/FloatButton";
const Detail = () => {
  return (
    <div className="relative overflow-hidden">
      <FloatButton />
      <Cover />
      <Description />
    </div>
  );
};

export default Detail;
