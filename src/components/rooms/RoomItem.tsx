import { useNavigate } from "react-router-dom";

import { Cabin as Room } from "../../api/apiRoom";

type RoomItemProps = {
  room: Room;
};

function RoomItem({ room }: RoomItemProps) {
  const navigate = useNavigate();
  console.log(room);
  return (
    <div className="grid-cols[1fr_2fr] mb-10 grid grid-cols-2 content-center justify-between gap-6 transition-all duration-300 hover:scale-105">
      {/* <img src="/rooms/asthetic-room.jpg" alt="room cover" /> */}
      <img src={room.image} alt="room cover" />
      <div className="flex flex-col justify-between gap-2 px-2 text-slate-50">
        <span className="text-golden-800">Rooms</span>
        <h1 className="text-xl">{room.name}</h1>
        <p>Price: ${room.regularPrice}</p>
        <p>Capacity: {room.maxCapacity}</p>
        <button
          className="w-fit cursor-pointer bg-golden-800 px-2 py-1 text-slate-50 transition-all duration-300 hover:bg-golden-500 hover:text-black"
          onClick={() => navigate(`/details/${room._id}`)}
        >
          See Details
        </button>
      </div>
    </div>
  );
}

export default RoomItem;
