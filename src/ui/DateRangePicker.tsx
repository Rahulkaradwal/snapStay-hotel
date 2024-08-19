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
  formValues?: FormValues;
  setFormValues?: React.Dispatch<React.SetStateAction<FormValues>>;
  dateValues?: {
    inputStartDate: string;
    inputEndDate: string;
  };
  setDateValues?: React.Dispatch<
    React.SetStateAction<{
      inputStartDate: string;
      inputEndDate: string;
    }>
  >;
};

const DatePickerClass =
  "flex  items-center justify-center gap-2  md:flex-row md:space-x-4   ";

const DateRangePicker = ({
  formValues,
  setFormValues,
  dateValues,
  setDateValues,
}: Props) => {
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (setFormValues) {
      setFormValues((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (setDateValues) {
      setDateValues((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  return (
    <>
      {formValues && (
        <>
          <p className="text-slate-50/45 md:text-xl">
            Choose your Booking Duration
          </p>
          <div
            className={`${DatePickerClass} justify-between px-0 text-center`}
          >
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
      )}

      {dateValues && (
        <>
          <div className={`${DatePickerClass} w-full text-center`}>
            <p className="text-md pt-5 text-golden-800">Check Dates</p>
            <DateInput
              type="date"
              label="Start Date"
              name="inputStartDate"
              value={dateValues.inputStartDate}
              onChange={handleChange}
            />
            <DateInput
              type="date"
              label="End Date"
              name="inputEndDate"
              value={dateValues.inputEndDate}
              onChange={handleChange}
            />
          </div>
        </>
      )}
    </>
  );
};

export default DateRangePicker;

// import React from "react";
// import DateInput from "./DateInput";

// type BookedDate = {
//   BookedStartDate: string;
//   BookedEndDate: string;
// };

// type FormValues = {
//   startDate: string;
//   endDate: string;
//   numGuests: number;
//   breakfast: boolean;
//   observations: string;
// };

// type Props = {
//   formValues: FormValues;
//   setFormValues: React.Dispatch<React.SetStateAction<FormValues>>;
//   BookedCabinDates: BookedDate[];
// };

// const DateRangePicker = ({
//   formValues,
//   setFormValues,
//   BookedCabinDates,
// }: Props) => {
//   const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormValues((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const isDateBooked = (date: string) => {
//     const selectedDate = new Date(date);

//     return BookedCabinDates.some(({ BookedStartDate, BookedEndDate }) => {
//       const startDate = new Date(BookedStartDate);
//       const endDate = new Date(BookedEndDate);

//       // Check if selectedDate is within the range of BookedStartDate and BookedEndDate
//       return selectedDate >= startDate && selectedDate <= endDate;
//     });
//   };

//   const handleDisabledDates = (date: string) => {
//     return isDateBooked(date);
//   };

//   return (
//     <>
//       <p className="text-xl text-slate-50/45">Choose your Booking Duration</p>
//       <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-x-4 md:space-y-0">
//         <DateInput
//           type="date"
//           label="Start Date"
//           name="startDate"
//           value={formValues.startDate}
//           onChange={handleDateChange}
//           min={new Date().toISOString().split("T")[0]} // prevent selecting past dates
//           disabled={handleDisabledDates(formValues.startDate)}
//         />
//         <DateInput
//           type="date"
//           label="End Date"
//           name="endDate"
//           value={formValues.endDate}
//           onChange={handleDateChange}
//           min={formValues.startDate} // end date can't be before start date
//           disabled={handleDisabledDates(formValues.endDate)}
//         />
//       </div>
//     </>
//   );
// };

// export default DateRangePicker;
