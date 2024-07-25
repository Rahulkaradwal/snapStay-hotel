import DescriptionFooter from "./DescriptionFooter";
import DescriptionHeader from "./DescriptionHeader";
import DescriptionIcons from "./DescriptionIcons";
import FloatButton from "./FloatButton";
import ImageGrid from "./ImageGrid";

const Description = () => {
  return (
    <section className="bg-dark relative">
      <div className="flex h-fit w-[70%] flex-col justify-start gap-20 p-20 text-slate-50">
        <DescriptionHeader />
        <DescriptionIcons />
        <ImageGrid />
        <FloatButton />
      </div>
      <DescriptionFooter />
    </section>
  );
};

export default Description;
