btn.addEventListener("click", function () {
  const name = document.getElementById("name").value;
  const date = document.getElementById("date").value;
  const employeeId = document.getElementById("employeeId").value;
  const postLocation = document.getElementById("postLocation").value;
  const incident = document.getElementById("incident").value;

  const entries = document.querySelectorAll(".entry");
  const entryValues = [];

  entries.forEach((entry, index) => {
    if (entry.value.trim() !== "") {
      entryValues.push(`Hour ${index + 1}: ${entry.value}`);
    }
  });

  const report = document.getElementById("report");
  report.innerHTML = `
        <h2>DAR Report</h2>
        <p><strong>Officer:</strong> ${name}</p>
        <p><strong>Employee ID:</strong> ${employeeId}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Post:</strong> ${postLocation}</p>
        <p><strong>Incident:</strong> ${incident}</p>
        <h3>Activity Log</h3>
        ${entryValues.map((entry) => `<p>${entry}</p>`).join("")}
    `;
});

reset.addEventListener("click", function () {
    document.getElementById("name").value = "";
    document.getElementById("date").value = "";
    document.getElementById("employeeId").value = "";
    document.getElementById("postLocation").value = "";
    document.getElementById("incident").value = "no";

    const entries = document.querySelectorAll(".entry");
    entries.forEach(entry => {
        entry.value = "";
    });

    document.getElementById("report").innerHTML = "";
});
