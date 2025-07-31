function calculate() {
  const initial = parseFloat(document.getElementById("initial").value);
  const target = parseFloat(document.getElementById("target").value);
  const rate = 0.0005;
  const leverage = 11;
  const tbody = document.querySelector("#resultTable tbody");
  tbody.innerHTML = "";

  let principal = initial;
  let totalProfit = 0;
  let day = 0;
  const startDate = new Date();

  while ((principal * rate * leverage) < target) {
    day++;
    const profit = principal * rate * leverage;
    totalProfit += profit;
    let reinvest = 0;
    if (totalProfit >= 100) {
      reinvest = totalProfit;
      principal += reinvest;
      totalProfit = 0;
    }

    const date = new Date(startDate);
    date.setDate(date.getDate() + day);
    const dateStr = date.toISOString().split("T")[0];

    const tr = document.createElement("tr");
    if (reinvest > 0) tr.classList.add("red");
    tr.innerHTML = `
      <td>${day}</td>
      <td>${dateStr}</td>
      <td>${profit.toFixed(2)}</td>
      <td>${(totalProfit).toFixed(2)}</td>
      <td>${reinvest > 0 ? reinvest.toFixed(2) : "-"}</td>
      <td>${principal.toFixed(2)}</td>
    `;
    tbody.appendChild(tr);
  }
}
