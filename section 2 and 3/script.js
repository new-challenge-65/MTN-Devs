
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

var chart = new ApexCharts(document.querySelector("#myChart"), options);
chart.render();


