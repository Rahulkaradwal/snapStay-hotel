import { useQuery } from "@tanstack/react-query";
import getCabins from "../../api/apiRoom";
import RoomItem from "./RoomItem";

import { Spinner } from "flowbite-react";
import { CabinResponse } from "../../api/types";

function RoomList() {
  const { data, isLoading, error } = useQuery<CabinResponse[], Error>({
    queryKey: ["cabins"],
    queryFn: () => getCabins(),
  });

  return (
    <div className="= mt-10 grid grid-cols-3 justify-between gap-14 p-10">
      {error && <div>Error: {error.message}</div>}
      {isLoading && <Spinner color="warning" size="xl" />}
      {data?.map((room) => <RoomItem key={room._id} room={room} />)}
    </div>
  );
}

export default RoomList;
