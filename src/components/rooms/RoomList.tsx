import { useQuery } from "@tanstack/react-query";
import getCabins from "../../api/apiRoom";
import RoomItem from "./RoomItem";

import { Spinner } from "flowbite-react";
import { CabinResponse } from "../../api/types";
import { useSearchParams } from "react-router-dom";
import { isDateOverlap } from "../../utils/checkAvailability";

type discountType = "all" | "with-discount" | "no-discount" | string;

function RoomList() {
  const [searchParams] = useSearchParams();

  const { data, isLoading, error } = useQuery<CabinResponse[], Error>({
    queryKey: ["cabins"],
    queryFn: () => getCabins(),
  });

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

  const userStartDate = new Date(searchParams.get("startDate") || "");
  const userEndDate = new Date(searchParams.get("endDate") || "");

  // Filter the cabins based on availability
  const availableCabins = sortedCabins.filter((cabin) => {
    // If no booked dates, the cabin is available
    if (!cabin.bookedDates || cabin.bookedDates.length === 0) {
      return true;
    }

    // Check if there's any overlap in booked dates
    const hasOverlap = cabin.bookedDates.some((date) => {
      const bookedStartDate = new Date(date.startDate);
      const bookedEndDate = new Date(date.endDate);
      return isDateOverlap(
        userStartDate,
        userEndDate,
        bookedStartDate,
        bookedEndDate,
      );
    });

    // Return cabins that do not have any overlap
    return !hasOverlap;
  });

  return (
    <>
      {isLoading && (
        <div className="m-3 flex items-center justify-center p-20">
          <Spinner color="warning" size="xl" />
        </div>
      )}

      {error && (
        <div className="m-3 flex items-center justify-center p-20 text-3xl text-slate-50">
          Error: {error.message}
        </div>
      )}

      {!isLoading && !error && availableCabins.length > 0 && (
        <div className="mt-5 grid h-fit grid-cols-3 justify-between gap-14 p-10">
          {availableCabins.map((room) => (
            <RoomItem key={room._id} room={room} />
          ))}
        </div>
      )}

      {!isLoading && !error && availableCabins.length === 0 && (
        <div className="m-3 flex items-center justify-center p-20 text-3xl text-slate-50">
          No Room Found, Please come back later!
        </div>
      )}
    </>
  );
}

export default RoomList;
