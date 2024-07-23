function ImageGrid() {
  return (
    <div>
      <h1 className="text-2xl text-golden-800">Impressions</h1>
      <div className="mt-10 grid grid-cols-3 gap-4">
        <div className="row-span-2 h-full">
          <img
            className="h-full w-full object-cover"
            src="/rooms/asthetic-room.jpg"
            alt="img"
          />
        </div>
        <div className="h-56">
          <img
            className="h-full w-full object-cover"
            src="/rooms/lobby-sofa.jpg"
            alt="img"
          />
        </div>
        <div className="h-56">
          <img
            className="h-full w-full object-cover"
            src="/rooms/beachview.jpg"
            alt="img"
          />
        </div>
        <div className="col-span-2 h-56">
          <img
            className="h-full w-full object-cover"
            src="/rooms/outdoor.jpg"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
}

export default ImageGrid;
