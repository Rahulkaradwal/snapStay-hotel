const calculateNumNights = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  // Set the time to 00:00:00 for both dates to ignore the time portion
  start.setHours(0, 0, 0, 0);
  end.setHours(0, 0, 0, 0);

  const diffTime = end.getTime() - start.getTime();
  return Math.ceil(diffTime / (1000 * 3600 * 24));
};

export default calculateNumNights;
