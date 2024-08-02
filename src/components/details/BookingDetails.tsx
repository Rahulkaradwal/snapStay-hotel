import BookingForm from "./BookingForm";
import { Cabin } from "../../api/apiRoom";

type Props = {
  data: Cabin;
};

const BookingDetails = ({ data }: Props) => {
  return (
    <div>
      <BookingForm data={data} />
    </div>
  );
};

export default BookingDetails;
