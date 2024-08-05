import { Link } from "react-router-dom";
import useDeleteBooking from "../../api/Checkin/useDeleteBooking";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Modal from "../../ui/Modal";

type Props = {
  status: string;
  bookingId: string;
  isPaid: boolean;
};

const PrimaryButton =
  "rounded-sm p-2 w-32 transition-all font-bold duration-300 bg-golden-800 hover:text-black text-slate-100";
const SecondaryButton =
  "rounded-sm p-2 w-32 border transition-all duration-300 font-bold bg-slate-10 hover:text-black hover:bg-slate-50 text-slate-100";

function BookingButtons({ bookingId, status, isPaid }: Props) {
  const { deleteBooking } = useDeleteBooking();

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
          <Modal.Open modalName="delete">
            <button className={SecondaryButton}>Cancel</button>
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
      {status === "checked-in" && isPaid && (
        <>
          <Modal.Open modalName="checkout">
            <button className={SecondaryButton}>Cancel</button>
          </Modal.Open>
          <Modal.Window windowName="checkout">
            <ConfirmDelete
              resourceName="Checkout"
              actionName="Checkout"
              onConfirm={() => deleteBooking(bookingId)}
            />
          </Modal.Window>
        </>
      )}
    </>
  );

  const unpaidContent = (
    <>
      <Modal.Open modalName="pay">
        <button className={PrimaryButton}>Pay</button>
      </Modal.Open>
      <Modal.Open modalName="delete">
        <button
          onClick={() => deleteBooking(bookingId)}
          className={SecondaryButton}
        >
          Delete
        </button>
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
      <Modal>{isPaid ? paidContent : unpaidContent}</Modal>
    </div>
  );
}

export default BookingButtons;
