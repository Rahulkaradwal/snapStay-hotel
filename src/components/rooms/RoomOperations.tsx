import { useEffect, useState } from "react";
import DateRangePicker from "../../ui/DateRangePicker";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
import { useSearchParams } from "react-router-dom";

function RoomOperations() {
  const [dateValues, setDateValues] = useState({
    inputStartDate: "",
    inputEndDate: "",
  });

  const { inputStartDate, inputEndDate } = dateValues;
  console.log(inputStartDate, inputEndDate);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    searchParams.set("startDate", inputStartDate);
    searchParams.set("endDate", inputEndDate);
    setSearchParams(searchParams);
  }, [inputStartDate, inputEndDate, searchParams, setSearchParams]);

  return (
    <>
      <span className="pb-5">
        <DateRangePicker
          dateValues={dateValues}
          setDateValues={setDateValues}
        />
      </span>
      <Filter
        filterField="discount"
        options={[
          { value: "all", option: "All" },
          { value: "no-discount", option: "No discount" },
          { value: "with-discount", option: "With discount" },
        ]}
      />
      <SortBy
        options={[
          { value: "name-asc", label: "Sort by Name (A-Z)" },
          { value: "name-desc", label: "Sort by Name  (Z-A)" },
          {
            value: "regularPrice-asc",
            label: "Sort by Price  (low first)",
          },
          {
            value: "regularPrice-desc",
            label: "Sort by Price  (high first)",
          },
          { value: "maxCapacity-asc", label: "Sort by capaity (low first)" },
        ]}
      />
    </>
  );
}

export default RoomOperations;
