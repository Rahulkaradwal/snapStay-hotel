import { BookingData } from "../api/types";
import { jsPDF } from "jspdf";

const handleGenerateReceipt = (data: BookingData) => {
  if (!data) return;

  const doc = new jsPDF();

  doc.text("Booking Receipt", 20, 20);
  doc.text(`Booking ID: ${data._id}`, 20, 30);
  doc.text(
    `Guest Name: ${data.guest.firstName} ${data.guest.lastName}`,
    20,
    40,
  );
  doc.text(`Guest Email: ${data.guest.email}`, 20, 50);
  doc.text(`Guest Phone: ${data.guest.phoneNumber}`, 20, 60);
  doc.text(`Cabin: ${data.cabin.name}`, 20, 70);
  doc.text(`Start Date: ${new Date(data.startDate).toLocaleString()}`, 20, 80);
  doc.text(`End Date: ${new Date(data.endDate).toLocaleString()}`, 20, 90);
  doc.text(`Number of Nights: ${data.numNights}`, 20, 100);
  doc.text(`Number of Guests: ${data.numGuests}`, 20, 110);
  doc.text(`Total Price: $${data.totalPrice}`, 20, 120);
  doc.text(`Breakfast Included: ${data.hasBreakfast ? "Yes" : "No"}`, 20, 130);
  doc.text(`Status: ${data.status}`, 20, 140);
  doc.text(`Created At: ${new Date(data.createdAt).toLocaleString()}`, 20, 150);

  doc.save(`BookingReceipt_${data.guest.lastName}.pdf`);
};

export default handleGenerateReceipt;
