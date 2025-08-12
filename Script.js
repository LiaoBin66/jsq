document.getElementById('calc').addEventListener('click', function() {
    // 获取输入值
    let principal = parseFloat(document.getElementById('principal').value);
    let rate = parseFloat(document.getElementById('rate').value) / 100;
    let days = parseInt(document.getElementById('days').value);
    let startDate = new Date(document.getElementById('startDate').value);

    // 清空表格
    let table = document.getElementById('resultTable');
    table.innerHTML = `
        <tr>
            <th>第几天</th>
            <th>具体日期</th>
            <th>每日返利</th>
            <th>累计返利</th>
            <th>复投金额</th>
            <th>累计本金</th>
        </tr>
    `;

    let cumulativeRebate = 0;
    let remainingPrincipal = principal;
    let totalPrincipal = principal;

    // 计算每日数据
    for (let i = 1; i <= days; i++) {
        // 计算每日返利，基于当前剩余本金
        let dailyRebate = remainingPrincipal * rate;
        cumulativeRebate += dailyRebate;
        remainingPrincipal -= dailyRebate; // 每日返利从本金中扣除
        let reinvestAmount = 0; // 假设无复投，保持原逻辑
        totalPrincipal = remainingPrincipal + reinvestAmount;

        // 计算当前日期
        let currentDate = new Date(startDate);
        currentDate.setDate(startDate.getDate() + i - 1);

        // 添加表格行
        let row = document.createElement('tr');