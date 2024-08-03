type ConfirmDeleteProps = {
  resourceName: string;
  actionName: string;
  onCloseModal?: () => void;
  onConfirm?: () => void;
};

const ConfirmDelete = ({
  resourceName,
  actionName,
  onCloseModal,
  onConfirm,
}: ConfirmDeleteProps) => {
  return (
    <div className="flex w-[40rem] flex-col gap-5 rounded-xl bg-dark p-20 text-slate-50">
      <h1 className="text-4xl">
        {actionName} {resourceName}
      </h1>
      <p className="mb-5 text-xl">
        Are you sure you want to {actionName.toLowerCase()} this {resourceName}?
      </p>

      <div className="flex-end flex gap-5 text-xl">
        <button
          className="rounded-md bg-golden-800 p-2 text-slate-50 transition-all duration-300 hover:bg-golden-500 hover:text-black"
          onClick={onCloseModal}
        >
          Cancel
        </button>
        <button
          onClick={onConfirm}
          className="rounded-md bg-red-700 p-2 text-slate-50 transition-all duration-300 hover:bg-red-500 hover:text-black"
        >
          {actionName}
        </button>
      </div>
    </div>
  );
};

export default ConfirmDelete;
