import React, { useState } from "react";

function LeaveForm({ addLeave }) {
  const [employee, setEmployee] = useState("");
  const [date, setDate] = useState("");
  const [reason, setReason] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newLeave = {
      employee,
      date,
      reason,
      status: "Pending",
    };

    addLeave(newLeave);

    setEmployee("");
    setDate("");
    setReason("");
  };

  return (
    <div>
      <h2>Apply Leave</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Employee Name"
          value={employee}
          onChange={(e) => setEmployee(e.target.value)}
          required
        />

        <br /><br />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <br /><br />

        <textarea
          placeholder="Reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          required
        />

        <br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default LeaveForm;