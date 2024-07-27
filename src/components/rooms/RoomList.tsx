import { useQuery } from "@tanstack/react-query";
import getCabins from "../../api/apiRoom";
import RoomItem from "./RoomItem";

import { Cabin } from "../../api/apiRoom";
import { Spinner } from "flowbite-react";

function RoomList() {
  const { data, isLoading, error } = useQuery<Cabin[], Error>({
    queryKey: ["cabins"],
    queryFn: () => getCabins(),
  });

  return (
    <div className="mt-10 h-screen overflow-y-auto p-6">
      {error && <div>Error: {error.message}</div>}
      {isLoading && <Spinner color="warning" size="xl" />}
      {data?.map((room) => <RoomItem key={room._id} room={room} />)}
    </div>
  );
}

export default RoomList;
