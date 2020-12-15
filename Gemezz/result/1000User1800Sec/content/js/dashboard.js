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

    var data = {"OkPercent": 56.25839339862022, "KoPercent": 43.74160660137978};
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
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.49259229457499765, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)  ", "F (Frustration threshold)", "Label"], "items": [{"data": [0.385704008851927, 500, 1500, "HomePage"], "isController": false}, {"data": [0.38938353917167684, 500, 1500, "WinnersList"], "isController": false}, {"data": [0.38714815296775906, 500, 1500, "Schedule"], "isController": false}, {"data": [0.9098513531256525, 500, 1500, "Game Page"], "isController": false}, {"data": [0.3911106496390655, 500, 1500, "Detail Game Page"], "isController": false}]}, function(index, item){
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
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 4647998, 2033109, 43.74160660137978, 334.0137700145173, 0, 39255, 964.0, 1391.0, 1909.0, 2581.48252027892, 3316.05441761194, 523.661746279016], "isController": false}, "titles": ["Label", "#Samples", "KO", "Error %", "Average", "Min", "Max", "90th pct", "95th pct", "99th pct", "Throughput", "Received", "Sent"], "items": [{"data": ["HomePage", 929967, 513790, 55.24819697903259, 336.69416226596906, 0, 11848, 619.0, 893.9500000000007, 1757.9900000000016, 516.5521972299599, 186.8743964881883, 98.4998240127879], "isController": false}, {"data": ["WinnersList", 929613, 505896, 54.42006512387413, 343.6710319240333, 0, 39255, 685.0, 1120.0, 1808.9900000000016, 516.4657260114302, 186.50868015382778, 104.58779231611722], "isController": false}, {"data": ["Schedule", 929843, 506916, 54.516300063559115, 347.4508707383765, 0, 6475, 696.0, 1125.9000000000015, 1796.9900000000016, 516.5765745745857, 186.91225749700695, 106.0747736514311], "isController": false}, {"data": ["Game Page", 929182, 2837, 0.3053223157573005, 296.00263027048305, 0, 11509, 568.9000000000015, 1021.9500000000007, 1738.9900000000016, 516.3682801913467, 2571.068982966241, 109.59423889341419], "isController": false}, {"data": ["Detail Game Page", 929393, 503670, 54.193435930763414, 346.2310777034139, 0, 10435, 641.0, 1036.9000000000015, 1806.9900000000016, 516.4252700223265, 186.41974529926665, 105.09149086986835], "isController": false}]}, function(index, item){
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
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset", 6914, 0.3400703061173798, 0.14875221546997222], "isController": false}, {"data": ["502/Bad Gateway", 2018299, 99.27155897691664, 43.42297479473959], "isController": false}, {"data": ["Non HTTP response code: org.apache.http.NoHttpResponseException/Non HTTP response message: ltc.la.gemezz.mobi:80 failed to respond", 7896, 0.3883707169659866, 0.16987959117021995], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 4647998, 2033109, "502/Bad Gateway", 2018299, "Non HTTP response code: org.apache.http.NoHttpResponseException/Non HTTP response message: ltc.la.gemezz.mobi:80 failed to respond", 7896, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset", 6914, null, null, null, null], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": ["HomePage", 929967, 513790, "502/Bad Gateway", 510567, "Non HTTP response code: org.apache.http.NoHttpResponseException/Non HTTP response message: ltc.la.gemezz.mobi:80 failed to respond", 1841, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset", 1382, null, null, null, null], "isController": false}, {"data": ["WinnersList", 929613, 505896, "502/Bad Gateway", 503079, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset", 1419, "Non HTTP response code: org.apache.http.NoHttpResponseException/Non HTTP response message: ltc.la.gemezz.mobi:80 failed to respond", 1398, null, null, null, null], "isController": false}, {"data": ["Schedule", 929843, 506916, "502/Bad Gateway", 503729, "Non HTTP response code: org.apache.http.NoHttpResponseException/Non HTTP response message: ltc.la.gemezz.mobi:80 failed to respond", 1751, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset", 1436, null, null, null, null], "isController": false}, {"data": ["Game Page", 929182, 2837, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset", 1419, "Non HTTP response code: org.apache.http.NoHttpResponseException/Non HTTP response message: ltc.la.gemezz.mobi:80 failed to respond", 1418, null, null, null, null, null, null], "isController": false}, {"data": ["Detail Game Page", 929393, 503670, "502/Bad Gateway", 500924, "Non HTTP response code: org.apache.http.NoHttpResponseException/Non HTTP response message: ltc.la.gemezz.mobi:80 failed to respond", 1488, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset", 1258, null, null, null, null], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
