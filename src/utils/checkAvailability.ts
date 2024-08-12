// Function to check if two date ranges overlap
export const isDateOverlap = (
  userStart: Date,
  userEnd: Date,
  bookedStart: Date,
  bookedEnd: Date,
) => {
  return (
    (userStart <= bookedEnd && userStart >= bookedStart) ||
    (userEnd <= bookedEnd && userEnd >= bookedStart) ||
    (userStart <= bookedStart && userEnd >= bookedEnd)
  );
};
