const companies = [
  {
    name: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    details: {
      growthRate: "12.5%",
      marketShare: "8.2%",
      employees: "7.8%",
      roi: "18.3%",
      lineData: {
        labels: ["Growth Rate", "Market Share", "Employees", "ROI"],
        data: [12.5, 8.2, 7.8, 18.3]
      },
      pieData: {
        labels: ["iPhone", "Mac", "Services", "Wearables"],
        values: [45, 25, 20, 10]
      }
    }
  },
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    details: {
      growthRate: "10.2%",
      marketShare: "9.5%",
      employees: "8.9%",
      roi: "16.7%",
      lineData: {
        labels: ["Growth Rate", "Market Share", "Employees", "ROI"],
        data: [10.2, 9.5, 8.9, 16.7]
      },
      pieData: {
        labels: ["Search", "YouTube", "Cloud", "Ads"],
        values: [50, 20, 15, 15]
      }
    }
  },
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    details: {
      growthRate: "8.7%",
      marketShare: "12.0%",
      employees: "9.1%",
      roi: "14.5%",
      lineData: {
        labels: ["Growth Rate", "Market Share", "Employees", "ROI"],
        data: [8.7, 12.0, 9.1, 14.5]
      },
      pieData: {
        labels: ["Windows", "Office", "Azure", "LinkedIn"],
        values: [40, 30, 20, 10]
      }
    }
  },
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    details: {
      growthRate: "15.0%",
      marketShare: "11.2%",
      employees: "10.3%",
      roi: "17.0%",
      lineData: {
        labels: ["Growth Rate", "Market Share", "Employees", "ROI"],
        data: [15.0, 11.2, 10.3, 17.0]
      },
      pieData: {
        labels: ["Retail", "AWS", "Prime", "Ads"],
        values: [50, 30, 10, 10]
      }
    }
  },
  {
    name: "Facebook",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
    details: {
      growthRate: "9.1%",
      marketShare: "7.9%",
      employees: "6.8%",
      roi: "15.2%",
      lineData: {
        labels: ["Growth Rate", "Market Share", "Employees", "ROI"],
        data: [9.1, 7.9, 6.8, 15.2]
      },
      pieData: {
        labels: ["Ads", "Messenger", "Instagram", "Oculus"],
        values: [60, 15, 15, 10]
      }
    }
  },
  {
    name: "Tesla",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
    details: {
      growthRate: "20.3%",
      marketShare: "6.5%",
      employees: "5.7%",
      roi: "22.1%",
      lineData: {
        labels: ["Growth Rate", "Market Share", "Employees", "ROI"],
        data: [20.3, 6.5, 5.7, 22.1]
      },
      pieData: {
        labels: ["Electric Cars", "Energy", "Solar", "Services"],
        values: [55, 20, 15, 10]
      }
    }
  },
  {
    name: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    details: {
      growthRate: "11.5%",
      marketShare: "7.1%",
      employees: "5.3%",
      roi: "13.8%",
      lineData: {
        labels: ["Growth Rate", "Market Share", "Employees", "ROI"],
        data: [11.5, 7.1, 5.3, 13.8]
      },
      pieData: {
        labels: ["Subscriptions", "Originals", "Licensing", "Ads"],
        values: [70, 20, 5, 5]
      }
    }
  },
  {
    name: "IBM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    details: {
      growthRate: "6.8%",
      marketShare: "5.4%",
      employees: "7.0%",
      roi: "12.0%",
      lineData: {
        labels: ["Growth Rate", "Market Share", "Employees", "ROI"],
        data: [6.8, 5.4, 7.0, 12.0]
      },
      pieData: {
        labels: ["Consulting", "Cloud", "AI", "Hardware"],
        values: [40, 30, 20, 10]
      }
    }
  },
  {
    name: "Intel",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Intel-logo.svg",
    details: {
      growthRate: "7.9%",
      marketShare: "6.9%",
      employees: "6.5%",
      roi: "13.0%",
      lineData: {
        labels: ["Growth Rate", "Market Share", "Employees", "ROI"],
        data: [7.9, 6.9, 6.5, 13.0]
      },
      pieData: {
        labels: ["Processors", "Memory", "FPGA", "IoT"],
        values: [50, 20, 15, 15]
      }
    }
  },
  {
    name: "Adobe",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Adobe_Corporate_Logo.svg",
    details: {
      growthRate: "9.4%",
      marketShare: "7.7%",
      employees: "5.9%",
      roi: "14.2%",
      lineData: {
        labels: ["Growth Rate", "Market Share", "Employees", "ROI"],
        data: [9.4, 7.7, 5.9, 14.2]
      },
      pieData: {
        labels: ["Photoshop", "Illustrator", "Cloud", "Marketing"],
        values: [40, 25, 25, 10]
      }
    }
  }
];

let lineChart;
let pieChart;

const companyListEl = document.getElementById("company-list");
const companyNameEl = document.getElementById("company-name");
const companyLogoEl = document.getElementById("company-logo");
const growthRateEl = document.getElementById("growth-rate");
const marketShareEl = document.getElementById("market-share");
const employeesEl = document.getElementById("employees");
const roiEl = document.getElementById("roi");

function createCompanyList() {
  companies.forEach((company, index) => {
    const li = document.createElement("li");
    li.textContent = company.name;
    if (index === 0) li.classList.add("active");
    li.addEventListener("click", () => {
      updateSelectedCompany(index);
    });
    companyListEl.appendChild(li);
  });
}

function updateSelectedCompany(index) {
  const company = companies[index];

  // Update active state
  [...companyListEl.children].forEach((li, i) => {
    li.classList.toggle("active", i === index);
  });

  // Update company details
  companyNameEl.textContent = company.name;
  companyLogoEl.src = company.logo;
  companyLogoEl.alt = company.name + " Logo";

  growthRateEl.textContent = company.details.growthRate;
  marketShareEl.textContent = company.details.marketShare;
  employeesEl.textContent = company.details.employees;
  roiEl.textContent = company.details.roi;

  // Update charts
  updateCharts(company.details.lineData, company.details.pieData);
}

function updateCharts(lineData, pieData) {
  const lineCtx = document.getElementById("line-chart").getContext("2d");
  const pieCtx = document.getElementById("pie-chart").getContext("2d");

  // Destroy previous charts if exist
  if (lineChart) lineChart.destroy();
  if (pieChart) pieChart.destroy();

  lineChart = new Chart(lineCtx, {
    type: "line",
    data: {
      labels: lineData.labels,
      datasets: [{
        label: "Percentage",
        data: lineData.data,
        fill: true,
        backgroundColor: "rgba(255, 152, 0, 0.2)",
        borderColor: "#ff9800",
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 5,
        pointBackgroundColor: "#ff9800"
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: Math.max(...lineData.data) + 5,
          ticks: {
            callback: value => value + "%"
          }
        }
      }
    }
  });

  pieChart = new Chart(pieCtx, {
    type: "pie",
    data: {
      labels: pieData.labels,
      datasets: [{
        data: pieData.values,
        backgroundColor: [
          "#ffb74d",
          "#f57c00",
          "#ffa726",
          "#ef6c00"
        ],
        hoverOffset: 20,
        borderColor: "#fff",
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            font: { weight: "600", size: 14 }
          }
        }
      }
    }
  });
}

// Initial setup
createCompanyList();
updateSelectedCompany(0);
