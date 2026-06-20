function LeaveHistory({ leaves, updateStatus }) {
  return (
    <div>
      <h2>Leave History</h2>

      <table border="1">
        <thead>
          <tr>
            <th>Employee</th>
            <th>Date</th>
            <th>Reason</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {leaves.map((leave, index) => (
            <tr key={index}>
              <td>{leave.employee}</td>
              <td>{leave.date}</td>
              <td>{leave.reason}</td>
              <td>{leave.status}</td>

              <td>
                <button
                  onClick={() =>
                    updateStatus(index, "Approved")
                  }
                >
                  Approve
                </button>

                <button
                  onClick={() =>
                    updateStatus(index, "Rejected")
                  }
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LeaveHistory;