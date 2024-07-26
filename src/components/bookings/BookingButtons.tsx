import ConfirmDelete from "../../ui/ConfirmDelete";
import Modal from "../../ui/Modal";

function BookingButtons() {
  return (
    <div className="flex gap-4">
      <Modal>
        <Modal.Window windowName="delete">
          <ConfirmDelete resourceName="booking" actionName="Delete" />
        </Modal.Window>

        <button className="rounded-md bg-golden-800 p-2 text-slate-50 transition-all duration-300 hover:bg-golden-500">
          Check-Out
        </button>

        <Modal.Open modalName="delete">
          <button className="rounded-md bg-green-700 p-2 text-slate-50 transition-all duration-300 hover:bg-green-500">
            Check-In
          </button>
        </Modal.Open>
      </Modal>
    </div>
  );
}

export default BookingButtons;
