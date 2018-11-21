google.charts.load('current', {'packages' :['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart(){
    var data = google.visualization.arrayToDataTable([
        ['Partido', 'Escanos', {role: 'style'} ],
        ['PP', 137, 'blue'],
        ['PSOE', 85, 'red'],
        ['Unidos Podemos', 71, 'purple'],
        ['Ciudadanos', 32, 'orange'],
        ['ERC-CATSI', 9, 'green'],
        ['CDC', 8, 'darkgreen'],
        ['PNV', 5, 'lightblue'],
        ['EEH Bildu', 2, 'black'],
        ['CCa-PNC', 1, 'blue']
    ]);

    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
        { calc: "stringify",
          sourceColumn: 1,
          type: "string",
          role: "annotation" },
        2]);

    var options = {
        width: 600,
        height: 400,
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
    };

    var chart = new google.visualization.BarChart(document.getElementById("barras"));
    chart.draw(view, options);
}