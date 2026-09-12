import React, { useState } from "react";
import "./BookingForm.css";

function BookingForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [meal, setMeal] = useState("breakfast");
  const [mealOption, setMealOption] = useState("veg");
  const [paymentMethod, setPaymentMethod] = useState("offline");
  const [onlinePaymentMethod, setOnlinePaymentMethod] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission logic here
  };
  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };
  const handleOnlinePaymentMethodChange = (event) => {
    setOnlinePaymentMethod(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <div class="heading">Make a Reservation</div>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
      />
      <label htmlFor="contactNumber">Contact Number</label>
      <input
        type="tel"
        id="contactNumber"
        value={contactNumber}
        onChange={(e) => setContactNumber(e.target.value)}
        required
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label htmlFor="date">Date:</label>
      <input
        type="date"
        id="date"
        value={date}
        onChange={(event) => setDate(event.target.value)}
        required
      />
      <label htmlFor="time">Time:</label>
      <input
        type="time"
        id="time"
        value={time}
        onChange={(event) => setTime(event.target.value)}
        required
      />
      <label>
        Meal type:
        <select required value={meal} onChange={(e) => setMeal(e.target.value)}>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
        </select>
      </label>
      <label>
        Meal Option:
        <input
          type="radio"
          name="mealOption"
          value="veg"
          checked={mealOption === "veg"}
          onChange={(e) => setMealOption(e.target.value)}
          required
        />{" "}
        Vegetarian
        <input
          type="radio"
          name="mealOption"
          value="non-veg"
          checked={mealOption === "non-veg"}
          onChange={(e) => setMealOption(e.target.value)}
          required
        />{" "}
        Non-Vegetarian
      </label>
      <label htmlFor="guests">Number of guests:</label>
      <input
        type="number"
        id="guests"
        value={guests}
        onChange={(event) => setGuests(event.target.value)}
        required
      />
      <label>
        Payment Method:
        <select value={paymentMethod} onChange={handlePaymentMethodChange}>
          <option value="offline">Offline</option>
          <option value="online">Online</option>
        </select>
      </label>
      {paymentMethod === "online" && (
        <div>
          <label>
            Online Payment Method:
            <select
              value={onlinePaymentMethod}
              onChange={handleOnlinePaymentMethodChange}
            >
              <option value="credit-card">Credit/Debit Card</option>
              <option value="upi">UPI</option>
              <option value="qr-scan">QR Scan</option>
              <option value="gift-card">Gift Card</option>
            </select>
          </label>
        </div>
      )}
      <button type="submit">Book table</button>
    </form>
  );
}

export default BookingForm;