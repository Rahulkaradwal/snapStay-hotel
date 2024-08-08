import { useQuery } from "@tanstack/react-query";
import getCabins from "../../api/apiRoom";
import RoomItem from "./RoomItem";

import { Spinner } from "flowbite-react";
import { CabinResponse } from "../../api/types";
import { useSearchParams } from "react-router-dom";

type discountType = "all" | "with-discount" | "no-discount" | string;

function RoomList() {
  const [searchParams] = useSearchParams();

  const { data, isLoading, error } = useQuery<CabinResponse[], Error>({
    queryKey: ["cabins"],
    queryFn: () => getCabins(),
  });

  if (isLoading) return <Spinner color="warning" size="xl" />;

  if (error) return <div>Error: {error.message}</div>;

  // filter the cabins based on discount
  let filterCabins: CabinResponse[] = data || [];

  const discountVal: discountType = searchParams.get("discount") || "";

  if (discountVal === "with-discount") {
    filterCabins = filterCabins.filter((cabin) => cabin.discount > 0);
  } else if (discountVal === "no-discount") {
    filterCabins = filterCabins.filter((cabin) => cabin.discount === 0);
  }

  // sort the cabins based on price or other fields
  const sortVal: string = searchParams.get("sortBy") || "";
  const [field, direction] = sortVal.split("-");
  const modifier = direction === "asc" ? 1 : -1;

  const sortedCabins = filterCabins.sort((a, b) => {
    if (!field || !(field in a) || !(field in b)) return 0;

    const valueA = a[field as keyof CabinResponse];
    const valueB = b[field as keyof CabinResponse];

    if (typeof valueA === "number" && typeof valueB === "number") {
      return (valueA - valueB) * modifier;
    }

    if (typeof valueA === "string" && typeof valueB === "string") {
      return valueA.localeCompare(valueB) * modifier;
    }

    return 0;
  });

  if (!sortedCabins.length) return <div>No Room found</div>;

  return (
    <div className="mt-10 grid grid-cols-3 justify-between gap-14 p-10">
      {sortedCabins.map((room) => (
        <RoomItem key={room._id} room={room} />
      ))}
    </div>
  );
}

export default RoomList;
