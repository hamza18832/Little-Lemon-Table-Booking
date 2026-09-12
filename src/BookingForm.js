import React, { useState } from "react";

function BookingForm({ availableTimes = [], dispatch, submitForm }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    if (dispatch) {
      dispatch({ type: "UPDATE_TIMES", date: selectedDate });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { date, time, guests, occasion };
    if (submitForm) {
      submitForm(formData);
    } else {
      console.log("Form submitted:", formData);
    }
  };

  const isFormValid = date && time && guests >= 1 && guests <= 10;

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "grid", maxWidth: "400px", gap: "20px", margin: "0 auto" }}
      aria-label="Table Reservation Form"
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        required
        onChange={handleDateChange}
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        required
        onChange={(e) => setTime(e.target.value)}
      >
        <option value="">Select a time</option>
        {availableTimes.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        required
        onChange={(e) => setGuests(parseInt(e.target.value, 10) || 1)}
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        required
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input
        type="submit"
        value="Make Your Reservation"
        aria-label="On Click"
        disabled={!isFormValid}
      />
    </form>
  );
}

export default BookingForm;