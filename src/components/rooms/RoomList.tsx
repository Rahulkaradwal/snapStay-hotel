import RoomItem from "./RoomItem";

function RoomList() {
  return (
    <div className="mt-10 h-screen overflow-y-auto p-6">
      <RoomItem />
      <RoomItem />
      <RoomItem />
      <RoomItem />
    </div>
  );
}

export default RoomList;
