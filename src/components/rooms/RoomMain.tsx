import RoomList from "./RoomList";
import RoomOperations from "./RoomOperations";

function RoomMain() {
  return (
    <div className="min-h-screen bg-dark p-4">
      <div className="mb-10 flex flex-col items-stretch gap-4 text-slate-50 md:flex md:content-center md:items-center md:justify-between md:p-5 md:px-10">
        <RoomOperations />
      </div>
      <RoomList />
    </div>
  );
}

export default RoomMain;
