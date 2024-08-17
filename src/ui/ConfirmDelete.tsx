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
    <div className="flex flex-col gap-4 rounded-xl bg-dark p-20 text-slate-50 sm:w-[40rem] md:w-[40rem] md:gap-8">
      <h1 className="text-xl md:text-3xl">
        {actionName} {resourceName}
      </h1>
      <p className="text-md mb-5 md:text-xl">
        Are you sure you want to {actionName.toLowerCase()} this {resourceName}?
      </p>

      <div className="flex-end flex gap-5 md:text-xl">
        <button
          className="rounded-sm bg-golden-800 p-2 text-slate-50 transition-all duration-300 hover:bg-golden-500 hover:text-black md:w-28"
          onClick={onCloseModal}
        >
          Cancel
        </button>
        <button
          onClick={onConfirm}
          className="rounded-sm bg-red-700 p-2 text-slate-50 transition-all duration-300 hover:bg-red-500 hover:text-black md:w-28"
        >
          {actionName}
        </button>
      </div>
    </div>
  );
};

export default ConfirmDelete;
