export const getCurrentTime = () => {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();

  // Pad the hours and minutes with leading zeros if needed
  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");

  // Concatenate the hours and minutes
  return formattedHours + formattedMinutes;
};

export default getCurrentTime;

export const getCurrentTimePlus30Minutes = () => {
  const currentTime = new Date();

  // Add 30 minutes to the current time
  currentTime.setMinutes(currentTime.getMinutes() + 1);

  // Extract the hours and minutes after adding 30 minutes
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();

  // Pad the hours and minutes with leading zeros if needed
  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");

  // Concatenate the hours and minutes
  return formattedHours + formattedMinutes;
};
