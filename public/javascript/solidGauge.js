$(function () {

    // General gauge options
    var gaugeOptions = {
        chart: { type: 'solidgauge' },
        title: "top",
        pane: {
          center: ["50%", "50%"],
          size: "25%",
          startAngle: 0,
          endAngle: 360,
          background: {
            backgroundColor: "#8c8c8c",
            innerRadius: "74%",
            outerRadius: "100%",
            shape: "arc",
            borderColor: "#fff"
          }
        },
        tooltip: { enabled: false },
        yAxis: {
          stops: [ [.1, "#ffc107"] ],
          minorTickInterval: null,
          tickWidth: 0,
          title: { enabled: false },
          labels: { enabled: false },
          min: 0,
          max: 100,
          gridLineColor: "#fff",
          minorGridLineColor: "#fff",
          minorTickColor: "#fff",
          tickColor: "#fff"
        },
        credits: { enabled: false },
        plotOptions: {
          solidgauge: {
            innerRadius: "74%",
            dataLabels: {
              enabled: true,
              borderWidth: 0,
              borderColor: "rgba(0,0,0,0)",
              useHTML: !0
            }
          }
      }
    };

    // This gauge
    $('#gauge').highcharts(Highcharts.merge(gaugeOptions, {
        
        yAxis: {
          min: 0,
          max: 100
        },

        series: [{
          data: [ 60 ] 
        }]

    }));

});