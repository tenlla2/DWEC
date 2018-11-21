      google.charts.load('current', {
        'packages':['geochart'],
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
      });
      google.charts.setOnLoadCallback(drawRegionsMap);

      function drawRegionsMap() {
        var data = google.visualization.arrayToDataTable([
          ['Country', 'Popularity'],
          ['France', 82.6],
          ['United States', 75.6],
          ['Spain', 75.6],
          ['Chain', 59.3],
          ['Italy', 52.4],
          ['United Kingdom', 35.8],
          ['Germany', 35.6],
          ['Mexico', 35],
          ['Thailand', 32.6],
        ]);

        var options = {
            colorAxis: {colors: ['yellow', '#e31b23']},
            backgroundColor: '#81d4fa',
            datalessRegionColor: 'white',
            defaultColor: '#f5f5f5',
          };

        var chart = new google.visualization.GeoChart(document.getElementById('mundi'));

        chart.draw(data, options);
      }