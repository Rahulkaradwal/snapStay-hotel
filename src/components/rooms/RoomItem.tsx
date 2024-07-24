import { Link } from "react-router-dom";

function RoomItem() {
  return (
    <div className="grid-cols[1fr_2fr] mb-10 grid grid-cols-2 content-center justify-between gap-6 transition-all duration-300 hover:scale-105">
      <img src="/rooms/asthetic-room.jpg" alt="room cover" />
      <div className="flex flex-col gap-3 text-slate-50">
        <span className="text-golden-800">Rooms</span>
        <h1 className="text-xl">Double Room Bernstein</h1>
        <p>Price: $100</p>
        <p>Capacity: 2</p>
        <Link to="/booking">Read more</Link>
      </div>
    </div>
  );
}

export default RoomItem;
