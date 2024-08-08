import RoomList from "./RoomList";
import RoomOperations from "./RoomOperations";

function RoomMain() {
  return (
    <div className="bg-dark p-4">
      <div className="flex items-center justify-between px-10 text-slate-50">
        <h1 className="text-3xl"> All Rooms</h1>
        <RoomOperations />
      </div>
      <RoomList />
    </div>
  );
}

export default RoomMain;
