const workersYears = [
    "1980,2020",
    "1952,2010",
    "1930,2000",
    "1860,1910",
    "1750,1820",
    "1990,2030",
    "2005,2022",
    "1990,1991",
    "1991,1992",
];

let result = {};

let resultSorted = {};

function countYears() {
    result = {};
    resultSorted = {};
    workersYears.forEach(function (year) {
        const years = year.split(",");
        const startYear = parseInt(years[0]);
        const endYear = parseInt(years[1]);
        for (let i = startYear; i <= endYear; i++) {
            if (i in result) {
                result[i] += 1;
            } else {
                result[i] = 1;
            }
        }
    });
}

function sortResults() {
    resultSorted = Object.entries(result).sort((a, b) => b[1] - a[1]);
}

document.querySelector(".showTable").addEventListener("click", function () {
    countYears();
    sortResults();
    const table = document.querySelector(".ranking");
    table.innerHTML = "";
    Object.entries(resultSorted).forEach(([key, value]) => {
        const row = table.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        cell1.innerHTML = value.toString().split(",")[0];
        cell2.innerHTML = value.toString().split(",")[1];
    });
});

document.querySelector(".showBest").addEventListener("click", function () {
    countYears();
    sortResults();
    const table = document.querySelector(".ranking");
    table.innerHTML = "";
    const row = table.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    cell1.innerHTML = resultSorted[0].toString().split(",")[0];
    cell2.innerHTML = resultSorted[0].toString().split(",")[1];
});
