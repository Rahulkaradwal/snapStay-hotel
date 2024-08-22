// Function to check if a date string is in the past
export const checkPastDates = (dateString: string) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Set today's time to midnight

  const [year, month, day] = dateString.split("-").map(Number); // Parse the date string "YYYY-MM-DD"

  const date = new Date(year, month - 1, day); // Create a date object from the parsed values (month is 0-based)

  // Check if the date is in the past
  return date < today;
};
