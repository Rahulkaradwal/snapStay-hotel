function CheckInButton() {
  const flexClass = "flex justify-end items-center gap-4 p-4  ";

  return (
    <div className={`${flexClass} rounded-lg`}>
      <button className="bg-lightDark rounded-lg bg-golden-800 p-2 px-4 font-semibold text-slate-50 transition-all duration-300 hover:text-black">
        Check-In
      </button>
      <button className="rounded-lg border border-golden-800 p-2 px-4 font-semibold text-slate-50 shadow-lg transition-all duration-300 hover:text-golden-800">
        Back
      </button>
    </div>
  );
}

export default CheckInButton;
