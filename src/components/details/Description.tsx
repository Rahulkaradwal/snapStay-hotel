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
  console.log("data in description", data);
  const { description } = data;
  return (
    <section className="relative bg-dark">
      <div className="flex h-fit w-[70%] flex-col justify-start gap-20 p-20 text-slate-50">
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
