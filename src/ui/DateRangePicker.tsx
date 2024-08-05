import React from "react";
import DateInput from "./DateInput";

type FormValues = {
  startDate: string;
  endDate: string;
  numGuests: number;
  breakfast: boolean;
  observations: string;
};

type Props = {
  formValues: FormValues;
  setFormValues: React.Dispatch<React.SetStateAction<FormValues>>;
};

const DateRangePicker = ({ formValues, setFormValues }: Props) => {
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <p className="text-xl text-slate-50/45">Choose your Booking Duration</p>
      <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-x-4 md:space-y-0">
        <DateInput
          type="date"
          label="Start Date"
          name="startDate"
          value={formValues.startDate}
          onChange={handleDateChange}
        />
        <DateInput
          type="date"
          label="End Date"
          name="endDate"
          value={formValues.endDate}
          onChange={handleDateChange}
        />
      </div>
    </>
  );
};

export default DateRangePicker;
