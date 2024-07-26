import CheckInHead from "./CheckInHead";
import CheckInDetail from "./CheckInDetail";
import CheckInButton from "./CheckInButton";

function CheckInMain() {
  return (
    <div className="h[90%] flex flex-col gap-6 px-32 text-slate-50">
      <CheckInHead />
      <CheckInDetail />
      <CheckInButton />
    </div>
  );
}

export default CheckInMain;
