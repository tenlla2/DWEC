

var cambia = setInterval(function () {

    google.charts.load('current', {'packages' :['corechart']});
    google.charts.setOnLoadCallback(drawChart);


    function drawChart(){
    var data = google.visualization.arrayToDataTable([
        ['Partido', 'Escanos', {role: 'style'} ],
        ['PP', generateRandomNumber(), 'blue'],
        ['PSOE', generateRandomNumber(), 'red'],
        ['Unidos Podemos', generateRandomNumber(), 'purple'],
        ['Ciudadanos', generateRandomNumber(), 'orange'],
        ['ERC-CATSI', generateRandomNumber(), 'green'],
        ['CDC', generateRandomNumber(), 'darkgreen'],
        ['PNV', generateRandomNumber(), 'lightblue'],
        ['EEH Bildu', generateRandomNumber(), 'black'],
        ['CCa-PNC', generateRandomNumber(), 'blue']
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
    }

, 10000);

function generateRandomNumber() {
    var min = 0;
        max = 200;
        highlightedNumber = Math.random() * (max - min) + min;

    return highlightedNumber;
};

generateRandomNumber();