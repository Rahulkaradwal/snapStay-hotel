import CheckInHead from "./CheckInHead";
import CheckInDetail from "./CheckInDetail";
import CheckInButton from "./CheckInButton";
import { useParams } from "react-router-dom";
import useGetBooking from "../../api/Booking/useGetBooking";
import { Spinner } from "flowbite-react";

function CheckInMain() {
  const { bookingId } = useParams();
  const { isLoading, data, error } = useGetBooking(bookingId as string);

  console.log(data);

  return (
    <div className="h[90%] -mx-8 flex flex-col gap-6 px-4 text-slate-50 sm:px-16 md:px-32">
      {isLoading && (
        <div className="flex h-full items-center justify-center">
          <Spinner color="warning" size="xl" />
        </div>
      )}
      {error && <p>{error.message}</p>}
      {!isLoading && data && (
        <>
          <CheckInHead
            cabinName={data.data.cabin.name}
            status={data.data.status}
          />
          <CheckInDetail data={data.data} />
          <CheckInButton
            bookingId={bookingId || data.data._id}
            status={data.data.status}
          />
        </>
      )}
    </div>
  );
}

export default CheckInMain;
