import DescriptionHeader from "./DescriptionHeader";
import DescriptionIcons from "./DescriptionIcons";
import ImageGrid from "./ImageGrid";

const Description = () => {
  return (
    <section className="bg-gray-900">
      <div className="flex h-fit w-[70%] flex-col justify-start gap-20 p-20 text-slate-50">
        <DescriptionHeader />
        <DescriptionIcons />
        <ImageGrid />
      </div>
    </section>
  );
};

export default Description;
