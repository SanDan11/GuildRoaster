const btn = document.getElementById("btn");
const report = document.getElementById("report");


btn.addEventListener("click", function() {
    const entries = document.querySelectorAll(".entry");
    const entryValues = [];

    entries.forEach((entry, index) => {
        if (entry.value.trim() !== "") {
            entryValues.push(`Hour ${index + 1}: ${entry.value}`)
            report.innerHTML = entryValues.map(entry => `<p>${entry}`).join("");
        }
    });
    console.log(entryValues)
});