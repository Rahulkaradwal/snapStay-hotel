import React, { useState } from "react";
import { format, addDays } from "date-fns";
import DateInput from "./DateInput";
import toast from "react-hot-toast";

const DateRangePicker = () => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(addDays(new Date(), 7));

  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(new Date(e.target.value));
  };

  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(new Date(e.target.value));

    if (new Date(e.target.value) < startDate) {
      toast.error("End date cannot be before start date");
    }
  };

  return (
    <>
      <p className="text-xl text-slate-50/45">Choose your Booking Duration </p>
      <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-x-4 md:space-y-0">
        <DateInput
          type="date"
          value={format(startDate, "yyyy-MM-dd")}
          label="Start Date"
          onChange={handleStartDateChange}
        />
        <DateInput
          type="date"
          value={format(endDate, "yyyy-MM-dd")}
          label="End Date"
          onChange={handleEndDateChange}
        />
      </div>
    </>
  );
};

export default DateRangePicker;
