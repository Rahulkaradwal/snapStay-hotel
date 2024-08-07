import toast from "react-hot-toast";
type FormValues = {
  startDate: string;
  endDate: string;
  numGuests: number;
  breakfast: boolean;
  observations: string;
};

const validateForm = (
  formValues: FormValues,
  capacity: number,
  guest: string,
) => {
  const { startDate, endDate, numGuests } = formValues;
  if (!numGuests || numGuests < 1 || numGuests > 10) {
    toast.error("Number of guests must be between 1 and 10");
    return false;
  }
  if (!startDate || !endDate) {
    toast.error("Please add dates");
    return false;
  }
  if (new Date(startDate) > new Date(endDate)) {
    toast.error("Start date cannot be after end date");
    return false;
  }
  if (numGuests > capacity) {
    toast.error("Number of guests cannot be greater than max capacity");
    return false;
  }
  if (!guest) {
    toast.error("Something went wrong. Please login again");
    return false;
  }
  return true;
};

export default validateForm;
