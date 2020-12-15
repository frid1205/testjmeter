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

    var data = {"OkPercent": 63.29816167387731, "KoPercent": 36.70183832612269};
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
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.5374275652990823, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)  ", "F (Frustration threshold)", "Label"], "items": [{"data": [0.4475855017691867, 500, 1500, "HomePage"], "isController": false}, {"data": [0.45414389067524114, 500, 1500, "WinnersList"], "isController": false}, {"data": [0.45146063985345397, 500, 1500, "Schedule"], "isController": false}, {"data": [0.8815479575522818, 500, 1500, "Game Page"], "isController": false}, {"data": [0.4528777142366892, 500, 1500, "Detail Game Page"], "isController": false}]}, function(index, item){
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
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 1865991, 684853, 36.70183832612269, 392.12699471753484, 0, 7462, 762.0, 1073.9500000000007, 1879.9900000000016, 2072.2273553098585, 2665.8512739893954, 420.1710563617881], "isController": false}, "titles": ["Label", "#Samples", "KO", "Error %", "Average", "Min", "Max", "90th pct", "95th pct", "99th pct", "Throughput", "Received", "Sent"], "items": [{"data": ["HomePage", 373618, 173376, 46.40461647993405, 397.631848572618, 0, 7307, 800.0, 1624.0, 3010.9900000000016, 414.91166893953863, 151.43143845761853, 79.08054063212123], "isController": false}, {"data": ["WinnersList", 373200, 170040, 45.562700964630224, 396.6339710611043, 0, 7312, 913.0, 1898.9500000000007, 3058.9900000000016, 414.7109024962662, 151.18708473869157, 83.956499847831], "isController": false}, {"data": ["Schedule", 373398, 170721, 45.72091976925425, 399.9830904289811, 0, 7310, 925.9000000000015, 1871.9500000000007, 3045.9400000000096, 414.90695100649367, 151.52004002487342, 85.17639942258288], "isController": false}, {"data": ["Game Page", 372788, 1334, 0.3578441366138395, 361.0009388714156, 0, 7281, 891.0, 1900.0, 3016.950000000008, 414.35345220443577, 2062.5055900579478, 87.8963040646959], "isController": false}, {"data": ["Detail Game Page", 372987, 169382, 45.41230659513602, 405.3479745942802, 0, 7462, 952.9000000000015, 1969.9500000000007, 3166.0, 414.5133632430522, 151.31051920233404, 84.30245112141998], "isController": false}]}, function(index, item){
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
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset", 2782, 0.40621856077143564, 0.14908967942503473], "isController": false}, {"data": ["502/Bad Gateway", 678265, 99.03804174034428, 36.34878196089906], "isController": false}, {"data": ["Non HTTP response code: org.apache.http.NoHttpResponseException/Non HTTP response message: ltc.la.gemezz.mobi:80 failed to respond", 3806, 0.5557396988842861, 0.20396668579859173], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 1865991, 684853, "502/Bad Gateway", 678265, "Non HTTP response code: org.apache.http.NoHttpResponseException/Non HTTP response message: ltc.la.gemezz.mobi:80 failed to respond", 3806, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset", 2782, null, null, null, null], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": ["HomePage", 373618, 173376, "502/Bad Gateway", 172065, "Non HTTP response code: org.apache.http.NoHttpResponseException/Non HTTP response message: ltc.la.gemezz.mobi:80 failed to respond", 787, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset", 524, null, null, null, null], "isController": false}, {"data": ["WinnersList", 373200, 170040, "502/Bad Gateway", 168795, "Non HTTP response code: org.apache.http.NoHttpResponseException/Non HTTP response message: ltc.la.gemezz.mobi:80 failed to respond", 710, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset", 535, null, null, null, null], "isController": false}, {"data": ["Schedule", 373398, 170721, "502/Bad Gateway", 169347, "Non HTTP response code: org.apache.http.NoHttpResponseException/Non HTTP response message: ltc.la.gemezz.mobi:80 failed to respond", 802, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset", 572, null, null, null, null], "isController": false}, {"data": ["Game Page", 372788, 1334, "Non HTTP response code: org.apache.http.NoHttpResponseException/Non HTTP response message: ltc.la.gemezz.mobi:80 failed to respond", 753, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset", 581, null, null, null, null, null, null], "isController": false}, {"data": ["Detail Game Page", 372987, 169382, "502/Bad Gateway", 168058, "Non HTTP response code: org.apache.http.NoHttpResponseException/Non HTTP response message: ltc.la.gemezz.mobi:80 failed to respond", 754, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset", 570, null, null, null, null], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
