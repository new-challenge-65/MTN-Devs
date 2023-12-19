var options = {
    chart: {
        type: "area",
        colors: ['#fff', '#FFF', '#fff'],
        toolbar: {
            show: false,
        },
        zoom: {
            enabled: false,
            type: "x",
            autoScaleYaxis: false,
            background: 'red',
            zoomedArea: {
                fill: {
                    opacity: 0.1,
                    fill: {

                    }
                },
                stroke: {
                    background: '#fff',
                    opacity: 0.4,
                    width: 1,
                },
            },
        },
    },

    series: [
        {
            name: "سود",
            data: [30, 25, 45, 30, 55, 55],
            show: false,
            fill: {

            }
        },
    ],
    xaxis: {
        categories: ["بهمن", "اسفند", "فروردین", "اردیبهشت", "خرداد", "تیر"],
    },
    stroke: {
        curve: "smooth",
    },
    grid: {
        show: false,
    },
    yaxis: {
        show: false,
        xaxis: {
            show: false,
        },
    },
    dataLabels: {
        enabled: false,
    },

};

var chart = new ApexCharts(document.querySelector("#myChart"), options);
chart.render();
var options = {
    chart: {
        type: "area",
        colors: ['#fff', '#FFF', '#fff'],
        toolbar: {
            show: false,
        },
        zoom: {
            enabled: false,
            type: "x",
            autoScaleYaxis: false,
            background: 'red',
            zoomedArea: {
                fill: {
                    opacity: 0.1,
                    fill: {

                    }
                },
                stroke: {
                    background: '#fff',
                    opacity: 0.4,
                    width: 1,
                },
            },
        },
    },

    series: [
        {
            name: "سود",
            data: [30, 45, 32, 70, 40, 40],
            show: false,
            fill: {

            }
        },
    ],
    xaxis: {
        categories: ["", "", "", "", "", "", "", "",],
    },
    stroke: {
        curve: "smooth",
    },
    grid: {
        show: false,
    },
    yaxis: {
        show: false,
        xaxis: {
            show: false,
        },
    },
    dataLabels: {
        enabled: false,
    },

};

var chart = new ApexCharts(document.querySelector("#myCharts"), options);
chart.render();



// })
const menubutton = document.querySelectorAll('.menu-toggle')

for (const btn of menubutton) {
    btn.addEventListener('click', () => {
        const btnparent = btn.closest('.card-p')
        const Menu = btnparent.querySelector('.menu')
        Menu.classList.toggle('hidden')
    })
}

//..............ChartJs for Section 3 [START]..................
var options = {
    chart: {
        type: 'area',
        toolbar: {
            show: false,
        },
        zoom: {
            enabled: false,
            type: 'x',
            autoScaleYaxis: false,
            zoomedArea: {
                fill: {
                    opacity: 0.4,
                    color: '#f1416d23',
                },
                stroke: {
                    color: ['#f1416c'],
                    opacity: 0.4,
                    width: 1

                },
            }
        },
    },
    colors: ['#d4526e'],

    series: [{
        name: 'sales',
        data: [80, 60, 80, 70, 80, 70, 90, 90, 90],
        show: false
    }],
    xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
    },
    stroke: {
        curve: 'smooth',
    },
    grid: {
        show: false
    },
    yaxis: {
        show: false,
        xaxis: {
            show: false
        }
    },
    dataLabels: {
        enabled: false
    }

}

var chart = new ApexCharts(document.querySelector("#myjsChart"), options);
chart.render();
//..............ChartJs for Section 3 [END]..................

const toolbarbtn = document.querySelector('.fiels-toolbar button')
const toolbarDropdown = document.querySelector('.menu-sub-dropdown')

toolbarbtn.addEventListener('click', () => {
    console.log('first')
    toolbarDropdown.classList.toggle('hidden')
})


const depositType = document.querySelectorAll(".table-type");
const depositbtn = document.querySelectorAll(".income-writers-header div ul li");
// ================================================================================================
for (let i = 0; i < depositbtn.length; i++) {
    depositbtn[i].addEventListener("click", () => {
        // reset active style and hide every content
        for (let i = 0; i < depositbtn.length; i++) {
            // remove active style from all buttons
            depositbtn[i].classList.remove("active-btn");
            // hide every content related to buttons
            depositType[i].classList.add("hidden");
        }

        // add active style to the clicked button
        depositbtn[i].classList.add("active-btn");

        // show content related to the clicked button
        depositType[i].classList.remove("hidden");
    });
}

// function tagvim footer
document.addEventListener("DOMContentLoaded", function () {

    let calendarEl = document.getElementById("calendar");
    let calendar = new FullCalendar.Calendar(calendarEl, {
        // initialView: "dayGridMonth,",
        events: '/api/demo-feeds/events.json',
        editable: true,
        selectable: true,
        headerToolbar: {
            start: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
            center: 'title',
            // end: 'prevYear,prev,next,nextYear'
        },
        events: [{
            title: 'hadi',
            start: '2023-12-16',
        }]
    });

    calendar.render();
});
