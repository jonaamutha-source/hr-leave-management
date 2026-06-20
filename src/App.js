import { useState } from "react";
import LeaveForm from "./components/LeaveForm";
import LeaveHistory from "./components/LeaveHistory";

function App() {
  const [leaves, setLeaves] = useState([]);
  const [search, setSearch] = useState("");
  const addLeave = (leave) => {
    setLeaves([...leaves, leave]);
  };

  const updateStatus = (index, status) => {
    const updatedLeaves = [...leaves];
    updatedLeaves[index].status = status;
    setLeaves(updatedLeaves);
  };
  const filteredLeaves = leaves.filter((leave) =>
  leave.employee.toLowerCase().includes(search.toLowerCase())
);
  return (
    <div>
      <h1>HR Employee Leave Management Tool</h1>
      <LeaveForm addLeave={addLeave} />
      <hr />
      <input
        type="text"
        placeholder="Search Employee"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <br />
      <br />
      <LeaveHistory
        leaves={filteredLeaves}
        updateStatus={updateStatus}
      />
    </div>
  );
}
export default App;