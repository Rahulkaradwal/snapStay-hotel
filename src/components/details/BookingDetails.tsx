import BookingForm from "./BookingForm";
import { CabinResponse } from "../../api/types";

type Props = {
  data: CabinResponse;
};

const BookingDetails = ({ data }: Props) => {
  return (
    <div>
      <BookingForm data={data} />
    </div>
  );
};

export default BookingDetails;
