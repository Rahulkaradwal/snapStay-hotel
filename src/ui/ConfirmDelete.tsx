type ConfirmDeleteProps = {
  resourceName: string;
  actionName: string;
  onCloseModal?: () => void;
};

const ConfirmDelete = ({
  resourceName,
  actionName,
  onCloseModal,
}: ConfirmDeleteProps) => {
  return (
    <div className="flex w-[40rem] flex-col gap-5">
      <h1 className="text-2xl">
        {actionName} {resourceName}
      </h1>
      <p className="mb-5 text-lg text-slate-50">
        Are you sure you want to {actionName.toLowerCase()} this {resourceName}?
      </p>

      <div className="flex-end flex gap-5">
        <button
          className="rounded-md bg-golden-800 p-2 text-slate-50 transition-all duration-300 hover:bg-golden-500"
          onClick={onCloseModal}
        >
          Cancel
        </button>
        <button className="rounded-md bg-red-700 p-2 text-slate-50 transition-all duration-300 hover:bg-red-500">
          {actionName}
        </button>
      </div>
    </div>
  );
};

export default ConfirmDelete;
