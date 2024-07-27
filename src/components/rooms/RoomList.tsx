import { useQuery } from "@tanstack/react-query";
import getCabins from "../../api/apiCabins";
import RoomItem from "./RoomItem";

import { Cabin } from "../../api/apiCabins";

function RoomList() {
  const { data, isLoading, error } = useQuery<Cabin[], Error>({
    queryKey: ["cabins"],
    queryFn: () => getCabins(),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="mt-10 h-screen overflow-y-auto p-6">
      {data?.map((room) => <RoomItem key={room._id} room={room} />)}
    </div>
  );
}

export default RoomList;
