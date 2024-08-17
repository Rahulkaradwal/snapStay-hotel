import DescriptionFooter from "./DescriptionFooter";
import DescriptionHeader from "./DescriptionHeader";
import DescriptionIcons from "./DescriptionIcons";
import BookingDetails from "./BookingDetails";
import ImageGrid from "./ImageGrid";
import { CabinResponse } from "../../api/types";
type Props = {
  data: CabinResponse;
};

const Description = ({ data }: Props) => {
  const { description } = data;
  return (
    <section className="relative bg-dark">
      <div className="flex h-fit flex-col justify-start gap-20 p-6 text-slate-50 md:w-[70%] md:p-20">
        <DescriptionHeader description={description} />
        <DescriptionIcons />
        <ImageGrid />
        <BookingDetails data={data} />
      </div>
      <DescriptionFooter />
    </section>
  );
};

export default Description;
