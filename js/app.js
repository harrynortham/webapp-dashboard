//Make alert box hideable

const alert = document.querySelector(".alert");
const alertClose = alert.querySelector(".fa-times");

alertClicked = localStorage.getItem("alertClicked");
alert.style.display = "block";
if (alertClicked === "true") {
  alert.style.display = "none";
} else {
  alertClose.addEventListener("click", () => {
    localStorage.setItem("alertClicked", "true");
    alert.style.display = "none";
  });
}

//modal box

const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");

function toggleModal() {
  modal.classList.toggle("show-modal");
}

closeButton.addEventListener("click", () => {
  toggleModal();
});

trigger.addEventListener("click", () => {
  toggleModal();
});

//charts

const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [
      {
        label: "# of Visits",
        data: [60, 80, 175, 110, 210, 190, 75],
        backgroundColor: [
          "rgba(115, 119, 191, 1)",
          "rgba(115, 119, 191, 1)",
          "rgba(115, 119, 191, 1)",
          "rgba(115, 119, 191, 1)",
          "rgba(115, 119, 191, 1)",
          "rgba(115, 119, 191, 1)",
          "rgba(115, 119, 191, 1)"
        ],
        hoverBackgroundColor: [
          "rgba(115, 119, 191, .8)",
          "rgba(115, 119, 191, .8)",
          "rgba(115, 119, 191, .8)",
          "rgba(115, 119, 191, .8)",
          "rgba(115, 119, 191, .8)",
          "rgba(115, 119, 191, .8)",
          "rgba(115, 119, 191, .8)"
        ]
      }
    ]
  },
  options: {
    legend: {
      display: false
    },
    tooltips: {
      enabled: false
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }
});

const ctx2 = document.getElementById("myChart2").getContext("2d");
const myPieChart = new Chart(ctx2, {
  type: "doughnut",
  data: {
    labels: ["Phones", "Tablets", "Desktops"],
    datasets: [
      {
        label: "# of Visits",
        data: [70, 40, 175],
        backgroundColor: [
          "rgba(129, 201, 143, 1)",
          "rgba(116, 177, 191, 1)",
          "rgba(115, 119, 191, 1)"
        ],
        hoverBackgroundColor: [
          "rgba(129, 201, 143, .8)",
          "rgba(116, 177, 191, .8)",
          "rgba(115, 119, 191, .8)"
        ]
      }
    ]
  },
  options: {
    legend: {
      position: "right"
    }
  }
});

const ctx3 = document.getElementById("myChart3").getContext("2d");

const hourlyTrafficChart = {
  type: "line",
  data: {
    labels: [
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
      "23:00",
      "00:00"
    ],
    datasets: [
      {
        data: [
          600,
          800,
          1900,
          1300,
          1000,
          1200,
          1700,
          1500,
          1800,
          1700,
          2100,
          1900,
          2200
        ],
        backgroundColor: "rgba(115, 119, 191, 0.5)",
        borderColor: "#7377bf",
        borderWidth: 0.5
      }
    ]
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    elements: { line: { tension: 0 }, point: { radius: 5 } }
  }
};
const dailyTrafficChart = {
  type: "line",
  data: {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    datasets: [
      {
        data: [200, 1900, 2200, 1000, 1200, 1500, 1700],
        backgroundColor: "rgba(115, 119, 191, 0.5)",
        borderColor: "#7377bf",
        borderWidth: 0.5
      }
    ]
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    elements: { line: { tension: 0 }, point: { radius: 5 } }
  }
};
const weeklyTrafficChart = {
  type: "line",
  data: {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        data: [1000, 800, 1900, 300],
        backgroundColor: "rgba(115, 119, 191, 0.5)",
        borderColor: "#7377bf",
        borderWidth: 0.5
      }
    ]
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    elements: { line: { tension: 0 }, point: { radius: 5 } }
  }
};
const monthlyTrafficChart = {
  type: "line",
  data: {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ],
    datasets: [
      {
        data: [
          100,
          800,
          1900,
          300,
          1000,
          1200,
          1700,
          500,
          1800,
          1700,
          2100,
          200
        ],
        backgroundColor: "rgba(115, 119, 191, 0.5)",
        borderColor: "#7377bf",
        borderWidth: 0.5
      }
    ]
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    elements: { line: { tension: 0 }, point: { radius: 5 } }
  }
};

new Chart(ctx3, hourlyTrafficChart);
document.querySelector("#hourlyTrafficChart").classList.add("active");

const trafficNav = document.querySelector(".traffic-nav");

function toggleActive(linkId) {
  const trafficNavItem = trafficNav.getElementsByTagName("li");
  const myLink = document.getElementById(linkId);
  for (let i = 0; i < trafficNavItem.length; ++i) {
    trafficNavItem[i].getElementsByTagName("a")[0].classList.remove("active");
  }
  myLink.className = "active";
}

trafficNav.addEventListener("click", e => {
  linkId = e.target.id;
  if (linkId === "hourlyTrafficChart") {
    new Chart(ctx3, hourlyTrafficChart);
    toggleActive(linkId);
  } else if (linkId === "dailyTrafficChart") {
    new Chart(ctx3, dailyTrafficChart);
    toggleActive(linkId);
  } else if (linkId === "weeklyTrafficChart") {
    new Chart(ctx3, weeklyTrafficChart);
    toggleActive(linkId);
  } else if (linkId === "monthlyTrafficChart") {
    new Chart(ctx3, monthlyTrafficChart);
    toggleActive(linkId);
  }
});
