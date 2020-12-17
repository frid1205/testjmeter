/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
var showControllersOnly = false;
var seriesFilter = "";
var filtersOnlySampleSeries = true;

/*
 * Add header in statistics table to group metrics by category
 * format
 *
 */
function summaryTableHeader(header) {
    var newRow = header.insertRow(-1);
    newRow.className = "tablesorter-no-sort";
    var cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Requests";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 3;
    cell.innerHTML = "Executions";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 7;
    cell.innerHTML = "Response Times (ms)";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 2;
    cell.innerHTML = "Network (KB/sec)";
    newRow.appendChild(cell);
}

/*
 * Populates the table identified by id parameter with the specified data and
 * format
 *
 */
function createTable(table, info, formatter, defaultSorts, seriesIndex, headerCreator) {
    var tableRef = table[0];

    // Create header and populate it with data.titles array
    var header = tableRef.createTHead();

    // Call callback is available
    if(headerCreator) {
        headerCreator(header);
    }

    var newRow = header.insertRow(-1);
    for (var index = 0; index < info.titles.length; index++) {
        var cell = document.createElement('th');
        cell.innerHTML = info.titles[index];
        newRow.appendChild(cell);
    }

    var tBody;

    // Create overall body if defined
    if(info.overall){
        tBody = document.createElement('tbody');
        tBody.className = "tablesorter-no-sort";
        tableRef.appendChild(tBody);
        var newRow = tBody.insertRow(-1);
        var data = info.overall.data;
        for(var index=0;index < data.length; index++){
            var cell = newRow.insertCell(-1);
            cell.innerHTML = formatter ? formatter(index, data[index]): data[index];
        }
    }

    // Create regular body
    tBody = document.createElement('tbody');
    tableRef.appendChild(tBody);

    var regexp;
    if(seriesFilter) {
        regexp = new RegExp(seriesFilter, 'i');
    }
    // Populate body with data.items array
    for(var index=0; index < info.items.length; index++){
        var item = info.items[index];
        if((!regexp || filtersOnlySampleSeries && !info.supportsControllersDiscrimination || regexp.test(item.data[seriesIndex]))
                &&
                (!showControllersOnly || !info.supportsControllersDiscrimination || item.isController)){
            if(item.data.length > 0) {
                var newRow = tBody.insertRow(-1);
                for(var col=0; col < item.data.length; col++){
                    var cell = newRow.insertCell(-1);
                    cell.innerHTML = formatter ? formatter(col, item.data[col]) : item.data[col];
                }
            }
        }
    }

    // Add support of columns sort
    table.tablesorter({sortList : defaultSorts});
}

$(document).ready(function() {

    // Customize table sorter default options
    $.extend( $.tablesorter.defaults, {
        theme: 'blue',
        cssInfoBlock: "tablesorter-no-sort",
        widthFixed: true,
        widgets: ['zebra']
    });

    var data = {"OkPercent": 98.92128220319938, "KoPercent": 1.0787177968006212};
    var dataset = [
        {
            "label" : "KO",
            "data" : data.KoPercent,
            "color" : "#FF6347"
        },
        {
            "label" : "OK",
            "data" : data.OkPercent,
            "color" : "#9ACD32"
        }];
    $.plot($("#flot-requests-summary"), dataset, {
        series : {
            pie : {
                show : true,
                radius : 1,
                label : {
                    show : true,
                    radius : 3 / 4,
                    formatter : function(label, series) {
                        return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'
                            + label
                            + '<br/>'
                            + Math.round10(series.percent, -2)
                            + '%</div>';
                    },
                    background : {
                        opacity : 0.5,
                        color : '#000'
                    }
                }
            }
        },
        legend : {
            show : true
        }
    });

    // Creates APDEX table
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.001009254908370278, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)  ", "F (Frustration threshold)", "Label"], "items": [{"data": [0.0017440733802725921, 500, 1500, "HomePage"], "isController": false}, {"data": [0.0010512374803410313, 500, 1500, "Detail Category Page"], "isController": false}, {"data": [4.347255487384757E-4, 500, 1500, "Category Page"], "isController": false}, {"data": [7.974222106496549E-4, 500, 1500, "Detail Game Page"], "isController": false}]}, function(index, item){
        switch(index){
            case 0:
                item = item.toFixed(3);
                break;
            case 1:
            case 2:
                item = formatDuration(item);
                break;
        }
        return item;
    }, [[0, 0]], 3);

    // Create statistics table
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 244735, 2640, 1.0787177968006212, 7359.085819355672, 785, 221130, 10219.800000000003, 21148.350000000024, 103481.93000000001, 258.9656821664085, 14177.312161822732, 45.735708083742836], "isController": false}, "titles": ["Label", "#Samples", "KO", "Error %", "Average", "Min", "Max", "90th pct", "95th pct", "99th pct", "Throughput", "Received", "Sent"], "items": [{"data": ["HomePage", 61924, 717, 1.1578709385698598, 7348.906740520634, 785, 210599, 10119.900000000001, 16555.0, 58342.990000000005, 65.52471408859655, 3238.1944106195533, 10.731367323736466], "isController": false}, {"data": ["Detail Category Page", 60405, 570, 0.9436304941643904, 7220.695786772602, 785, 221130, 10482.600000000006, 16808.900000000016, 59474.46000000041, 65.5963616579737, 3138.635382450991, 12.01053237893912], "isController": false}, {"data": ["Category Page", 60958, 702, 1.1516125857147543, 7482.029462908893, 828, 221112, 11065.900000000001, 17129.650000000005, 56734.83000000003, 64.7675633061016, 3148.8230383057294, 11.589343518276506], "isController": false}, {"data": ["Detail Game Page", 61448, 651, 1.0594323655773987, 7383.421527144899, 1039, 210911, 10369.0, 16660.100000000013, 61459.82000000003, 65.169988376138, 4755.74861157953, 11.78624128077778], "isController": false}]}, function(index, item){
        switch(index){
            // Errors pct
            case 3:
                item = item.toFixed(2) + '%';
                break;
            // Mean
            case 4:
            // Mean
            case 7:
            // Percentile 1
            case 8:
            // Percentile 2
            case 9:
            // Percentile 3
            case 10:
            // Throughput
            case 11:
            // Kbytes/s
            case 12:
            // Sent Kbytes/s
                item = item.toFixed(2);
                break;
        }
        return item;
    }, [[0, 0]], 0, summaryTableHeader);

    // Create error table
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset", 1943, 73.59848484848484, 0.7939199542362146], "isController": false}, {"data": ["Non HTTP response code: java.net.ConnectException/Non HTTP response message: Connection timed out (Connection timed out)", 109, 4.128787878787879, 0.044537969640631704], "isController": false}, {"data": ["500/Internal Server Error", 405, 15.340909090909092, 0.16548511655464074], "isController": false}, {"data": ["Non HTTP response code: org.apache.http.NoHttpResponseException/Non HTTP response message: jazz.slypee.pk:80 failed to respond", 183, 6.931818181818182, 0.07477475636913396], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 244735, 2640, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset", 1943, "500/Internal Server Error", 405, "Non HTTP response code: org.apache.http.NoHttpResponseException/Non HTTP response message: jazz.slypee.pk:80 failed to respond", 183, "Non HTTP response code: java.net.ConnectException/Non HTTP response message: Connection timed out (Connection timed out)", 109, null, null], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": ["HomePage", 61924, 717, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset", 557, "500/Internal Server Error", 94, "Non HTTP response code: org.apache.http.NoHttpResponseException/Non HTTP response message: jazz.slypee.pk:80 failed to respond", 34, "Non HTTP response code: java.net.ConnectException/Non HTTP response message: Connection timed out (Connection timed out)", 32, null, null], "isController": false}, {"data": ["Detail Category Page", 60405, 570, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset", 409, "500/Internal Server Error", 88, "Non HTTP response code: org.apache.http.NoHttpResponseException/Non HTTP response message: jazz.slypee.pk:80 failed to respond", 45, "Non HTTP response code: java.net.ConnectException/Non HTTP response message: Connection timed out (Connection timed out)", 28, null, null], "isController": false}, {"data": ["Category Page", 60958, 702, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset", 496, "500/Internal Server Error", 120, "Non HTTP response code: org.apache.http.NoHttpResponseException/Non HTTP response message: jazz.slypee.pk:80 failed to respond", 54, "Non HTTP response code: java.net.ConnectException/Non HTTP response message: Connection timed out (Connection timed out)", 32, null, null], "isController": false}, {"data": ["Detail Game Page", 61448, 651, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset", 481, "500/Internal Server Error", 103, "Non HTTP response code: org.apache.http.NoHttpResponseException/Non HTTP response message: jazz.slypee.pk:80 failed to respond", 50, "Non HTTP response code: java.net.ConnectException/Non HTTP response message: Connection timed out (Connection timed out)", 17, null, null], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
