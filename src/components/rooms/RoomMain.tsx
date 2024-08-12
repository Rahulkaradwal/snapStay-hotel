import RoomList from "./RoomList";
import RoomOperations from "./RoomOperations";

function RoomMain() {
  return (
    <div className="bg-dark p-4">
      <div className="flex content-center items-center justify-between p-5 px-10 text-slate-50">
        <RoomOperations />
      </div>
      <RoomList />
    </div>
  );
}

export default RoomMain;
