import { Link } from "react-router-dom";
import useDeleteBooking from "../../api/Checkin/useDeleteBooking";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Modal from "../../ui/Modal";
import useCheckout from "../../api/Checkin/useCheckout";
import { BookingData } from "../../api/types";
import handleGenerateReceipt from "../../utils/generateReceipt";
import useBookWithPayment from "../../api/Booking/useBookWithPayment";
import { Spinner } from "flowbite-react";
import useCancelBooking from "../../api/Booking/useCancelBooking";

type Props = {
  status: string;
  bookingId: string;
  isPaid: boolean;
  bookingData: BookingData;
};

const PrimaryButton =
  "rounded-sm p-2 w-32 transition-all text-xs  md:text-sm font-semibold  md:font-bold duration-300 bg-golden-800 hover:text-black text-slate-100";

const LinkButton =
  "rounded-sm p-2 w-fit transition-all px-6 text-center  text-xs   md:text-sm font-semibold  md:font-bold duration-300 bg-golden-800 hover:text-black text-slate-100";

const SecondaryButton =
  "rounded-sm p-2 w-32 border transition-all text-xs md:text-sm duration-300 font-bold bg-slate-10 hover:text-black hover:bg-slate-50 text-slate-100";

function BookingButtons({ bookingData, bookingId, status, isPaid }: Props) {
  const {
    cabin: { _id: cabinId },
  } = bookingData;
  const { deleteBooking } = useDeleteBooking();
  const { checkout } = useCheckout();
  const { cancelBooking, isPending } = useCancelBooking();

  const { isProcessing, BookWithPayment } = useBookWithPayment(cabinId);

  const handleCheckout = (id: string) => {
    checkout(id);
  };

  const handlePayment = async () => {
    await BookWithPayment();
  };

  const paidContent = (
    <>
      {status === "confirmed" && isPaid && (
        <>
          <Link
            className={`${PrimaryButton} px-6`}
            to={`/check-in/${bookingId}`}
          >
            Check-In
          </Link>
          <Modal.Open modalName="cancel">
            <button className={SecondaryButton} disabled={isPending}>
              Cancel
            </button>
          </Modal.Open>
          <Modal.Window windowName="cancel">
            <ConfirmDelete
              resourceName="booking"
              actionName="Confirm"
              onConfirm={() => cancelBooking(bookingId)}
            />
          </Modal.Window>
        </>
      )}
      {status === "checked-in" && isPaid && (
        <>
          <Modal.Open modalName="checkout">
            <button className={PrimaryButton}>Check-Out</button>
          </Modal.Open>
          <Modal.Window windowName="checkout">
            <ConfirmDelete
              resourceName="Checkout"
              actionName="Checkout"
              onConfirm={() => handleCheckout(bookingId)}
            />
          </Modal.Window>
          <Link className={`${LinkButton} `} to={`/check-in/${bookingId}`}>
            Details
          </Link>

          <Modal.Open modalName="cancel">
            <button className={SecondaryButton}>Cancel</button>
          </Modal.Open>
          <Modal.Window windowName="cancel">
            <ConfirmDelete
              resourceName="Cancel"
              actionName="Cancel"
              onConfirm={() => deleteBooking(bookingId)}
            />
          </Modal.Window>
        </>
      )}

      {status === "checked-out" && isPaid && (
        <>
          <Modal.Open modalName="receipt">
            <button className={PrimaryButton}>Get Receipt</button>
          </Modal.Open>
          <Modal.Window windowName="receipt">
            <ConfirmDelete
              resourceName="Receipt"
              actionName="Generate"
              onConfirm={() => handleGenerateReceipt(bookingData)}
            />
          </Modal.Window>
          <Link className={`${LinkButton} `} to={`/check-in/${bookingId}`}>
            Details
          </Link>
          <Modal.Open modalName="delete">
            <button className={SecondaryButton}>Remove</button>
          </Modal.Open>
          <Modal.Window windowName="delete">
            <ConfirmDelete
              resourceName="booking"
              actionName="Delete"
              onConfirm={() => deleteBooking(bookingId)}
            />
          </Modal.Window>
        </>
      )}
    </>
  );

  const unpaidContent = (
    <>
      <button onClick={handlePayment} className={PrimaryButton}>
        {isProcessing ? <Spinner color="white" size="sm" /> : "Pay Now"}
      </button>
      <Modal.Open modalName="delete">
        <button className={SecondaryButton}>Delete</button>
      </Modal.Open>
      <Modal.Window windowName="delete">
        <ConfirmDelete
          resourceName="booking"
          actionName="Delete"
          onConfirm={() => deleteBooking(bookingId)}
        />
      </Modal.Window>
    </>
  );

  const cancelledContent = (
    <>
      <button disabled className={`${PrimaryButton} cursor-not-allowed`}>
        {"Cancelled"}
      </button>
      <Modal.Open modalName="delete">
        <button className={SecondaryButton}>Delete</button>
      </Modal.Open>
      <Modal.Window windowName="delete">
        <ConfirmDelete
          resourceName="booking"
          actionName="Delete"
          onConfirm={() => deleteBooking(bookingId)}
        />
      </Modal.Window>
    </>
  );

  return (
    <div className="flex gap-4">
      <Modal>
        {isPaid
          ? paidContent
          : status === "cancelled"
            ? cancelledContent
            : unpaidContent}
      </Modal>
    </div>
  );
}

export default BookingButtons;
