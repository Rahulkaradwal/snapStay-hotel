// import React, { useState } from "react";
// import { format, addDays } from "date-fns";
import DateInput from "./DateInput";
import { UseFormRegister } from "react-hook-form";

type Props = {
  register: UseFormRegister<any>;
};

const DateRangePicker = ({ register }: Props) => {
  // const [startDate, setStartDate] = useState<Date>(new Date());
  // const [endDate, setEndDate] = useState<Date>(addDays(new Date(), 7));

  // const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setStartDate(new Date(e.target.value));
  // };

  // const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const newEndDate = new Date(e.target.value);
  //   setEndDate(newEndDate);

  //   if (newEndDate < startDate) {
  //     toast.error("End date cannot be before start date");
  //   }
  // };

  return (
    <>
      <p className="text-xl text-slate-50/45">Choose your Booking Duration</p>
      <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-x-4 md:space-y-0">
        <DateInput
          register={register("startDate", { required: true })}
          type="date"
          // value={format(startDate, "yyyy-MM-dd")}
          label="Start Date"
          // onChange={handleStartDateChange}
        />
        <DateInput
          register={register("endDate", { required: true })}
          type="date"
          // value={format(endDate, "yyyy-MM-dd")}
          label="End Date"
          // onChange={handleEndDateChange}
        />
      </div>
    </>
  );
};

export default DateRangePicker;
