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
      fill:{
        
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
      fill:{
        
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
  btn.addEventListener('click',()=>{
    const btnparent = btn.closest('.card-p')
    const Menu = btnparent.querySelector('.menu')
    Menu.classList.toggle('hidden')
  })
}