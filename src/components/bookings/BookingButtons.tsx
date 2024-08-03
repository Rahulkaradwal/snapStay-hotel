import ConfirmDelete from "../../ui/ConfirmDelete";
import Modal from "../../ui/Modal";

type Props = {
  status: string;
  bookingId: string;
  isPaid: boolean;
};

const PrimaryButton =
  "rounded-sm p-2  w-32 transition-all font-bold duration-300  bg-golden-800 hover:text-black text-slate-100";
const SecondaryButton =
  "rounded-sm p-2  w-32 border transition-all duration-300 fond-bold bg-slate-10 hover:text-black  hover:bg-slate-50 text-slate-100";

function BookingButtons({ status, bookingId, isPaid }: Props) {
  const paidContet = (
    <>
      <Modal.Window windowName="delete">
        <ConfirmDelete resourceName="booking" actionName="Delete" />
      </Modal.Window>

      <button className={PrimaryButton}>Check-Out</button>

      <Modal.Open modalName="delete">
        <button className={SecondaryButton}>Check-In</button>
      </Modal.Open>
    </>
  );

  const unpaidContent = (
    <>
      <Modal.Open modalName="delete">
        <button className={PrimaryButton}>Pay</button>
      </Modal.Open>
      <Modal.Open modalName="delete">
        <button className={SecondaryButton}>Cancel</button>
      </Modal.Open>
    </>
  );

  return (
    <div className="flex gap-4">
      <Modal>{isPaid ? paidContet : unpaidContent}</Modal>
    </div>
  );
}

export default BookingButtons;
