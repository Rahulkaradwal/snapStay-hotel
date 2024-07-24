function Details() {
  return (
    <div className="mt-10 flex h-screen flex-col gap-6 p-4">
      <p className="text-golden-800">Sweet dreams guaranteed</p>
      <h1 className="text-4xl text-slate-50">
        Cozy rooms, suites, and chalets - just for you
      </h1>
      <p className="text-slate-50">
        Step in and instantly feel at home. That is the feeling of comfort a
        stay at Hotel | Chalet Das Alpenschlössel is all about. Our cosy and
        stylish places of retreat give you space to breathe and relax. Find your
        favourite room, suite, or chalet!
      </p>
      <span className="mt-10 text-golden-800">Rooms | Suites | Chalets</span>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900"></div>
        <img
          className="h-[23rem] w-[100%] object-cover"
          src="/rooms/asthetic-room.jpg"
          alt="room-cover"
        />
      </div>
    </div>
  );
}

export default Details;
