google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Partidos', 'Escaños'],
          ['PP',     137],
          ['PSOE',      85],
          ['Podemos',    71],
          ['Ciudadanos',  32],
          ['ERC', 9],
          ['CDC',    8],
          ['PNV',    5],
          ['EH Bildu',    2],
          ['CCA',    1],
        ]);

        var data2 = google.visualization.arrayToDataTable([
            ['Element', 'Density', { role: 'style' }, { role: 'annotation' } ],
            ['Copper', 8.94, '#b87333', 'Cu' ],
            ['Silver', 10.49, 'silver', 'Ag' ],
            ['Gold', 19.30, 'gold', 'Au' ],
            ['Platinum', 21.45, 'color: #e5e4e2', 'Pt' ]
         ]);

        var options = {
          title: 'Escaños',
          is3D: true,
        };

        var chart = new google.visualization.PieChart(document.getElementById('queso'));
        chart.draw(data, options);
      }
