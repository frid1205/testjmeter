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
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 1233.0, "minX": 0.0, "maxY": 3731.0, "series": [{"data": [[0.0, 1233.0], [0.1, 1233.0], [0.2, 1233.0], [0.3, 1233.0], [0.4, 1233.0], [0.5, 1233.0], [0.6, 1233.0], [0.7, 1233.0], [0.8, 1233.0], [0.9, 1233.0], [1.0, 1343.0], [1.1, 1343.0], [1.2, 1343.0], [1.3, 1343.0], [1.4, 1343.0], [1.5, 1343.0], [1.6, 1343.0], [1.7, 1343.0], [1.8, 1343.0], [1.9, 1343.0], [2.0, 1348.0], [2.1, 1348.0], [2.2, 1348.0], [2.3, 1348.0], [2.4, 1348.0], [2.5, 1348.0], [2.6, 1348.0], [2.7, 1348.0], [2.8, 1348.0], [2.9, 1348.0], [3.0, 1374.0], [3.1, 1374.0], [3.2, 1374.0], [3.3, 1374.0], [3.4, 1374.0], [3.5, 1374.0], [3.6, 1374.0], [3.7, 1374.0], [3.8, 1374.0], [3.9, 1374.0], [4.0, 1379.0], [4.1, 1379.0], [4.2, 1379.0], [4.3, 1379.0], [4.4, 1379.0], [4.5, 1379.0], [4.6, 1379.0], [4.7, 1379.0], [4.8, 1379.0], [4.9, 1379.0], [5.0, 1386.0], [5.1, 1386.0], [5.2, 1386.0], [5.3, 1386.0], [5.4, 1386.0], [5.5, 1386.0], [5.6, 1386.0], [5.7, 1386.0], [5.8, 1386.0], [5.9, 1386.0], [6.0, 1390.0], [6.1, 1390.0], [6.2, 1390.0], [6.3, 1390.0], [6.4, 1390.0], [6.5, 1390.0], [6.6, 1390.0], [6.7, 1390.0], [6.8, 1390.0], [6.9, 1390.0], [7.0, 1395.0], [7.1, 1395.0], [7.2, 1395.0], [7.3, 1395.0], [7.4, 1395.0], [7.5, 1395.0], [7.6, 1395.0], [7.7, 1395.0], [7.8, 1395.0], [7.9, 1395.0], [8.0, 1418.0], [8.1, 1418.0], [8.2, 1418.0], [8.3, 1418.0], [8.4, 1418.0], [8.5, 1418.0], [8.6, 1418.0], [8.7, 1418.0], [8.8, 1418.0], [8.9, 1418.0], [9.0, 1445.0], [9.1, 1445.0], [9.2, 1445.0], [9.3, 1445.0], [9.4, 1445.0], [9.5, 1445.0], [9.6, 1445.0], [9.7, 1445.0], [9.8, 1445.0], [9.9, 1445.0], [10.0, 1474.0], [10.1, 1474.0], [10.2, 1474.0], [10.3, 1474.0], [10.4, 1474.0], [10.5, 1474.0], [10.6, 1474.0], [10.7, 1474.0], [10.8, 1474.0], [10.9, 1474.0], [11.0, 1483.0], [11.1, 1483.0], [11.2, 1483.0], [11.3, 1483.0], [11.4, 1483.0], [11.5, 1483.0], [11.6, 1483.0], [11.7, 1483.0], [11.8, 1483.0], [11.9, 1483.0], [12.0, 1513.0], [12.1, 1513.0], [12.2, 1513.0], [12.3, 1513.0], [12.4, 1513.0], [12.5, 1513.0], [12.6, 1513.0], [12.7, 1513.0], [12.8, 1513.0], [12.9, 1513.0], [13.0, 1522.0], [13.1, 1522.0], [13.2, 1522.0], [13.3, 1522.0], [13.4, 1522.0], [13.5, 1522.0], [13.6, 1522.0], [13.7, 1522.0], [13.8, 1522.0], [13.9, 1522.0], [14.0, 1554.0], [14.1, 1554.0], [14.2, 1554.0], [14.3, 1554.0], [14.4, 1554.0], [14.5, 1554.0], [14.6, 1554.0], [14.7, 1554.0], [14.8, 1554.0], [14.9, 1554.0], [15.0, 1583.0], [15.1, 1583.0], [15.2, 1583.0], [15.3, 1583.0], [15.4, 1583.0], [15.5, 1583.0], [15.6, 1583.0], [15.7, 1583.0], [15.8, 1583.0], [15.9, 1583.0], [16.0, 1610.0], [16.1, 1610.0], [16.2, 1610.0], [16.3, 1610.0], [16.4, 1610.0], [16.5, 1610.0], [16.6, 1610.0], [16.7, 1610.0], [16.8, 1610.0], [16.9, 1610.0], [17.0, 1640.0], [17.1, 1640.0], [17.2, 1640.0], [17.3, 1640.0], [17.4, 1640.0], [17.5, 1640.0], [17.6, 1640.0], [17.7, 1640.0], [17.8, 1640.0], [17.9, 1640.0], [18.0, 1653.0], [18.1, 1653.0], [18.2, 1653.0], [18.3, 1653.0], [18.4, 1653.0], [18.5, 1653.0], [18.6, 1653.0], [18.7, 1653.0], [18.8, 1653.0], [18.9, 1653.0], [19.0, 1657.0], [19.1, 1657.0], [19.2, 1657.0], [19.3, 1657.0], [19.4, 1657.0], [19.5, 1657.0], [19.6, 1657.0], [19.7, 1657.0], [19.8, 1657.0], [19.9, 1657.0], [20.0, 1658.0], [20.1, 1658.0], [20.2, 1658.0], [20.3, 1658.0], [20.4, 1658.0], [20.5, 1658.0], [20.6, 1658.0], [20.7, 1658.0], [20.8, 1658.0], [20.9, 1658.0], [21.0, 1670.0], [21.1, 1670.0], [21.2, 1670.0], [21.3, 1670.0], [21.4, 1670.0], [21.5, 1670.0], [21.6, 1670.0], [21.7, 1670.0], [21.8, 1670.0], [21.9, 1670.0], [22.0, 1674.0], [22.1, 1674.0], [22.2, 1674.0], [22.3, 1674.0], [22.4, 1674.0], [22.5, 1674.0], [22.6, 1674.0], [22.7, 1674.0], [22.8, 1674.0], [22.9, 1674.0], [23.0, 1694.0], [23.1, 1694.0], [23.2, 1694.0], [23.3, 1694.0], [23.4, 1694.0], [23.5, 1694.0], [23.6, 1694.0], [23.7, 1694.0], [23.8, 1694.0], [23.9, 1694.0], [24.0, 1763.0], [24.1, 1763.0], [24.2, 1763.0], [24.3, 1763.0], [24.4, 1763.0], [24.5, 1763.0], [24.6, 1763.0], [24.7, 1763.0], [24.8, 1763.0], [24.9, 1763.0], [25.0, 1795.0], [25.1, 1795.0], [25.2, 1795.0], [25.3, 1795.0], [25.4, 1795.0], [25.5, 1795.0], [25.6, 1795.0], [25.7, 1795.0], [25.8, 1795.0], [25.9, 1795.0], [26.0, 1834.0], [26.1, 1834.0], [26.2, 1834.0], [26.3, 1834.0], [26.4, 1834.0], [26.5, 1834.0], [26.6, 1834.0], [26.7, 1834.0], [26.8, 1834.0], [26.9, 1834.0], [27.0, 1847.0], [27.1, 1847.0], [27.2, 1847.0], [27.3, 1847.0], [27.4, 1847.0], [27.5, 1847.0], [27.6, 1847.0], [27.7, 1847.0], [27.8, 1847.0], [27.9, 1847.0], [28.0, 1886.0], [28.1, 1886.0], [28.2, 1886.0], [28.3, 1886.0], [28.4, 1886.0], [28.5, 1886.0], [28.6, 1886.0], [28.7, 1886.0], [28.8, 1886.0], [28.9, 1886.0], [29.0, 1904.0], [29.1, 1904.0], [29.2, 1904.0], [29.3, 1904.0], [29.4, 1904.0], [29.5, 1904.0], [29.6, 1904.0], [29.7, 1904.0], [29.8, 1904.0], [29.9, 1904.0], [30.0, 1948.0], [30.1, 1948.0], [30.2, 1948.0], [30.3, 1948.0], [30.4, 1948.0], [30.5, 1948.0], [30.6, 1948.0], [30.7, 1948.0], [30.8, 1948.0], [30.9, 1948.0], [31.0, 1987.0], [31.1, 1987.0], [31.2, 1987.0], [31.3, 1987.0], [31.4, 1987.0], [31.5, 1987.0], [31.6, 1987.0], [31.7, 1987.0], [31.8, 1987.0], [31.9, 1987.0], [32.0, 2009.0], [32.1, 2009.0], [32.2, 2009.0], [32.3, 2009.0], [32.4, 2009.0], [32.5, 2009.0], [32.6, 2009.0], [32.7, 2009.0], [32.8, 2009.0], [32.9, 2009.0], [33.0, 2071.0], [33.1, 2071.0], [33.2, 2071.0], [33.3, 2071.0], [33.4, 2071.0], [33.5, 2071.0], [33.6, 2071.0], [33.7, 2071.0], [33.8, 2071.0], [33.9, 2071.0], [34.0, 2139.0], [34.1, 2139.0], [34.2, 2139.0], [34.3, 2139.0], [34.4, 2139.0], [34.5, 2139.0], [34.6, 2139.0], [34.7, 2139.0], [34.8, 2139.0], [34.9, 2139.0], [35.0, 2457.0], [35.1, 2457.0], [35.2, 2457.0], [35.3, 2457.0], [35.4, 2457.0], [35.5, 2457.0], [35.6, 2457.0], [35.7, 2457.0], [35.8, 2457.0], [35.9, 2457.0], [36.0, 2460.0], [36.1, 2460.0], [36.2, 2460.0], [36.3, 2460.0], [36.4, 2460.0], [36.5, 2460.0], [36.6, 2460.0], [36.7, 2460.0], [36.8, 2460.0], [36.9, 2460.0], [37.0, 2607.0], [37.1, 2607.0], [37.2, 2607.0], [37.3, 2607.0], [37.4, 2607.0], [37.5, 2607.0], [37.6, 2607.0], [37.7, 2607.0], [37.8, 2607.0], [37.9, 2607.0], [38.0, 2695.0], [38.1, 2695.0], [38.2, 2695.0], [38.3, 2695.0], [38.4, 2695.0], [38.5, 2695.0], [38.6, 2695.0], [38.7, 2695.0], [38.8, 2695.0], [38.9, 2695.0], [39.0, 2703.0], [39.1, 2703.0], [39.2, 2703.0], [39.3, 2703.0], [39.4, 2703.0], [39.5, 2703.0], [39.6, 2703.0], [39.7, 2703.0], [39.8, 2703.0], [39.9, 2703.0], [40.0, 2732.0], [40.1, 2732.0], [40.2, 2732.0], [40.3, 2732.0], [40.4, 2732.0], [40.5, 2732.0], [40.6, 2732.0], [40.7, 2732.0], [40.8, 2732.0], [40.9, 2732.0], [41.0, 2754.0], [41.1, 2754.0], [41.2, 2754.0], [41.3, 2754.0], [41.4, 2754.0], [41.5, 2754.0], [41.6, 2754.0], [41.7, 2754.0], [41.8, 2754.0], [41.9, 2754.0], [42.0, 2765.0], [42.1, 2765.0], [42.2, 2765.0], [42.3, 2765.0], [42.4, 2765.0], [42.5, 2765.0], [42.6, 2765.0], [42.7, 2765.0], [42.8, 2765.0], [42.9, 2765.0], [43.0, 2820.0], [43.1, 2820.0], [43.2, 2820.0], [43.3, 2820.0], [43.4, 2820.0], [43.5, 2820.0], [43.6, 2820.0], [43.7, 2820.0], [43.8, 2820.0], [43.9, 2820.0], [44.0, 2821.0], [44.1, 2821.0], [44.2, 2821.0], [44.3, 2821.0], [44.4, 2821.0], [44.5, 2821.0], [44.6, 2821.0], [44.7, 2821.0], [44.8, 2821.0], [44.9, 2821.0], [45.0, 2832.0], [45.1, 2832.0], [45.2, 2832.0], [45.3, 2832.0], [45.4, 2832.0], [45.5, 2832.0], [45.6, 2832.0], [45.7, 2832.0], [45.8, 2832.0], [45.9, 2832.0], [46.0, 2859.0], [46.1, 2859.0], [46.2, 2859.0], [46.3, 2859.0], [46.4, 2859.0], [46.5, 2859.0], [46.6, 2859.0], [46.7, 2859.0], [46.8, 2859.0], [46.9, 2859.0], [47.0, 2865.0], [47.1, 2865.0], [47.2, 2865.0], [47.3, 2865.0], [47.4, 2865.0], [47.5, 2865.0], [47.6, 2865.0], [47.7, 2865.0], [47.8, 2865.0], [47.9, 2865.0], [48.0, 2900.0], [48.1, 2900.0], [48.2, 2900.0], [48.3, 2900.0], [48.4, 2900.0], [48.5, 2900.0], [48.6, 2900.0], [48.7, 2900.0], [48.8, 2900.0], [48.9, 2900.0], [49.0, 2908.0], [49.1, 2908.0], [49.2, 2908.0], [49.3, 2908.0], [49.4, 2908.0], [49.5, 2908.0], [49.6, 2908.0], [49.7, 2908.0], [49.8, 2908.0], [49.9, 2908.0], [50.0, 2944.0], [50.1, 2944.0], [50.2, 2944.0], [50.3, 2944.0], [50.4, 2944.0], [50.5, 2944.0], [50.6, 2944.0], [50.7, 2944.0], [50.8, 2944.0], [50.9, 2944.0], [51.0, 2968.0], [51.1, 2968.0], [51.2, 2968.0], [51.3, 2968.0], [51.4, 2968.0], [51.5, 2968.0], [51.6, 2968.0], [51.7, 2968.0], [51.8, 2968.0], [51.9, 2968.0], [52.0, 2981.0], [52.1, 2981.0], [52.2, 2981.0], [52.3, 2981.0], [52.4, 2981.0], [52.5, 2981.0], [52.6, 2981.0], [52.7, 2981.0], [52.8, 2981.0], [52.9, 2981.0], [53.0, 3028.0], [53.1, 3028.0], [53.2, 3028.0], [53.3, 3028.0], [53.4, 3028.0], [53.5, 3028.0], [53.6, 3028.0], [53.7, 3028.0], [53.8, 3028.0], [53.9, 3028.0], [54.0, 3037.0], [54.1, 3037.0], [54.2, 3037.0], [54.3, 3037.0], [54.4, 3037.0], [54.5, 3037.0], [54.6, 3037.0], [54.7, 3037.0], [54.8, 3037.0], [54.9, 3037.0], [55.0, 3044.0], [55.1, 3044.0], [55.2, 3044.0], [55.3, 3044.0], [55.4, 3044.0], [55.5, 3044.0], [55.6, 3044.0], [55.7, 3044.0], [55.8, 3044.0], [55.9, 3044.0], [56.0, 3112.0], [56.1, 3112.0], [56.2, 3112.0], [56.3, 3112.0], [56.4, 3112.0], [56.5, 3112.0], [56.6, 3112.0], [56.7, 3112.0], [56.8, 3112.0], [56.9, 3112.0], [57.0, 3113.0], [57.1, 3113.0], [57.2, 3113.0], [57.3, 3113.0], [57.4, 3113.0], [57.5, 3113.0], [57.6, 3113.0], [57.7, 3113.0], [57.8, 3113.0], [57.9, 3113.0], [58.0, 3116.0], [58.1, 3116.0], [58.2, 3116.0], [58.3, 3116.0], [58.4, 3116.0], [58.5, 3116.0], [58.6, 3116.0], [58.7, 3116.0], [58.8, 3116.0], [58.9, 3116.0], [59.0, 3141.0], [59.1, 3141.0], [59.2, 3141.0], [59.3, 3141.0], [59.4, 3141.0], [59.5, 3141.0], [59.6, 3141.0], [59.7, 3141.0], [59.8, 3141.0], [59.9, 3141.0], [60.0, 3170.0], [60.1, 3170.0], [60.2, 3170.0], [60.3, 3170.0], [60.4, 3170.0], [60.5, 3170.0], [60.6, 3170.0], [60.7, 3170.0], [60.8, 3170.0], [60.9, 3170.0], [61.0, 3174.0], [61.1, 3174.0], [61.2, 3174.0], [61.3, 3174.0], [61.4, 3174.0], [61.5, 3174.0], [61.6, 3174.0], [61.7, 3174.0], [61.8, 3174.0], [61.9, 3174.0], [62.0, 3178.0], [62.1, 3178.0], [62.2, 3178.0], [62.3, 3178.0], [62.4, 3178.0], [62.5, 3178.0], [62.6, 3178.0], [62.7, 3178.0], [62.8, 3178.0], [62.9, 3178.0], [63.0, 3191.0], [63.1, 3191.0], [63.2, 3191.0], [63.3, 3191.0], [63.4, 3191.0], [63.5, 3191.0], [63.6, 3191.0], [63.7, 3191.0], [63.8, 3191.0], [63.9, 3191.0], [64.0, 3192.0], [64.1, 3192.0], [64.2, 3192.0], [64.3, 3192.0], [64.4, 3192.0], [64.5, 3192.0], [64.6, 3192.0], [64.7, 3192.0], [64.8, 3192.0], [64.9, 3192.0], [65.0, 3201.0], [65.1, 3201.0], [65.2, 3201.0], [65.3, 3201.0], [65.4, 3201.0], [65.5, 3201.0], [65.6, 3201.0], [65.7, 3201.0], [65.8, 3201.0], [65.9, 3201.0], [66.0, 3204.0], [66.1, 3204.0], [66.2, 3204.0], [66.3, 3204.0], [66.4, 3204.0], [66.5, 3204.0], [66.6, 3204.0], [66.7, 3204.0], [66.8, 3204.0], [66.9, 3204.0], [67.0, 3206.0], [67.1, 3206.0], [67.2, 3206.0], [67.3, 3206.0], [67.4, 3206.0], [67.5, 3206.0], [67.6, 3206.0], [67.7, 3206.0], [67.8, 3206.0], [67.9, 3206.0], [68.0, 3213.0], [68.1, 3213.0], [68.2, 3213.0], [68.3, 3213.0], [68.4, 3213.0], [68.5, 3213.0], [68.6, 3213.0], [68.7, 3213.0], [68.8, 3213.0], [68.9, 3213.0], [69.0, 3216.0], [69.1, 3216.0], [69.2, 3216.0], [69.3, 3216.0], [69.4, 3216.0], [69.5, 3216.0], [69.6, 3216.0], [69.7, 3216.0], [69.8, 3216.0], [69.9, 3216.0], [70.0, 3218.0], [70.1, 3218.0], [70.2, 3218.0], [70.3, 3218.0], [70.4, 3218.0], [70.5, 3218.0], [70.6, 3218.0], [70.7, 3218.0], [70.8, 3218.0], [70.9, 3218.0], [71.0, 3220.0], [71.1, 3220.0], [71.2, 3220.0], [71.3, 3220.0], [71.4, 3220.0], [71.5, 3220.0], [71.6, 3220.0], [71.7, 3220.0], [71.8, 3220.0], [71.9, 3220.0], [72.0, 3222.0], [72.1, 3222.0], [72.2, 3222.0], [72.3, 3222.0], [72.4, 3222.0], [72.5, 3222.0], [72.6, 3222.0], [72.7, 3222.0], [72.8, 3222.0], [72.9, 3222.0], [73.0, 3230.0], [73.1, 3230.0], [73.2, 3230.0], [73.3, 3230.0], [73.4, 3230.0], [73.5, 3230.0], [73.6, 3230.0], [73.7, 3230.0], [73.8, 3230.0], [73.9, 3230.0], [74.0, 3237.0], [74.1, 3237.0], [74.2, 3237.0], [74.3, 3237.0], [74.4, 3237.0], [74.5, 3237.0], [74.6, 3237.0], [74.7, 3237.0], [74.8, 3237.0], [74.9, 3237.0], [75.0, 3237.0], [75.1, 3237.0], [75.2, 3237.0], [75.3, 3237.0], [75.4, 3237.0], [75.5, 3237.0], [75.6, 3237.0], [75.7, 3237.0], [75.8, 3237.0], [75.9, 3237.0], [76.0, 3237.0], [76.1, 3237.0], [76.2, 3237.0], [76.3, 3237.0], [76.4, 3237.0], [76.5, 3237.0], [76.6, 3237.0], [76.7, 3237.0], [76.8, 3237.0], [76.9, 3237.0], [77.0, 3241.0], [77.1, 3241.0], [77.2, 3241.0], [77.3, 3241.0], [77.4, 3241.0], [77.5, 3241.0], [77.6, 3241.0], [77.7, 3241.0], [77.8, 3241.0], [77.9, 3241.0], [78.0, 3244.0], [78.1, 3244.0], [78.2, 3244.0], [78.3, 3244.0], [78.4, 3244.0], [78.5, 3244.0], [78.6, 3244.0], [78.7, 3244.0], [78.8, 3244.0], [78.9, 3244.0], [79.0, 3246.0], [79.1, 3246.0], [79.2, 3246.0], [79.3, 3246.0], [79.4, 3246.0], [79.5, 3246.0], [79.6, 3246.0], [79.7, 3246.0], [79.8, 3246.0], [79.9, 3246.0], [80.0, 3250.0], [80.1, 3250.0], [80.2, 3250.0], [80.3, 3250.0], [80.4, 3250.0], [80.5, 3250.0], [80.6, 3250.0], [80.7, 3250.0], [80.8, 3250.0], [80.9, 3250.0], [81.0, 3252.0], [81.1, 3252.0], [81.2, 3252.0], [81.3, 3252.0], [81.4, 3252.0], [81.5, 3252.0], [81.6, 3252.0], [81.7, 3252.0], [81.8, 3252.0], [81.9, 3252.0], [82.0, 3255.0], [82.1, 3255.0], [82.2, 3255.0], [82.3, 3255.0], [82.4, 3255.0], [82.5, 3255.0], [82.6, 3255.0], [82.7, 3255.0], [82.8, 3255.0], [82.9, 3255.0], [83.0, 3257.0], [83.1, 3257.0], [83.2, 3257.0], [83.3, 3257.0], [83.4, 3257.0], [83.5, 3257.0], [83.6, 3257.0], [83.7, 3257.0], [83.8, 3257.0], [83.9, 3257.0], [84.0, 3269.0], [84.1, 3269.0], [84.2, 3269.0], [84.3, 3269.0], [84.4, 3269.0], [84.5, 3269.0], [84.6, 3269.0], [84.7, 3269.0], [84.8, 3269.0], [84.9, 3269.0], [85.0, 3273.0], [85.1, 3273.0], [85.2, 3273.0], [85.3, 3273.0], [85.4, 3273.0], [85.5, 3273.0], [85.6, 3273.0], [85.7, 3273.0], [85.8, 3273.0], [85.9, 3273.0], [86.0, 3278.0], [86.1, 3278.0], [86.2, 3278.0], [86.3, 3278.0], [86.4, 3278.0], [86.5, 3278.0], [86.6, 3278.0], [86.7, 3278.0], [86.8, 3278.0], [86.9, 3278.0], [87.0, 3286.0], [87.1, 3286.0], [87.2, 3286.0], [87.3, 3286.0], [87.4, 3286.0], [87.5, 3286.0], [87.6, 3286.0], [87.7, 3286.0], [87.8, 3286.0], [87.9, 3286.0], [88.0, 3299.0], [88.1, 3299.0], [88.2, 3299.0], [88.3, 3299.0], [88.4, 3299.0], [88.5, 3299.0], [88.6, 3299.0], [88.7, 3299.0], [88.8, 3299.0], [88.9, 3299.0], [89.0, 3330.0], [89.1, 3330.0], [89.2, 3330.0], [89.3, 3330.0], [89.4, 3330.0], [89.5, 3330.0], [89.6, 3330.0], [89.7, 3330.0], [89.8, 3330.0], [89.9, 3330.0], [90.0, 3351.0], [90.1, 3351.0], [90.2, 3351.0], [90.3, 3351.0], [90.4, 3351.0], [90.5, 3351.0], [90.6, 3351.0], [90.7, 3351.0], [90.8, 3351.0], [90.9, 3351.0], [91.0, 3355.0], [91.1, 3355.0], [91.2, 3355.0], [91.3, 3355.0], [91.4, 3355.0], [91.5, 3355.0], [91.6, 3355.0], [91.7, 3355.0], [91.8, 3355.0], [91.9, 3355.0], [92.0, 3358.0], [92.1, 3358.0], [92.2, 3358.0], [92.3, 3358.0], [92.4, 3358.0], [92.5, 3358.0], [92.6, 3358.0], [92.7, 3358.0], [92.8, 3358.0], [92.9, 3358.0], [93.0, 3370.0], [93.1, 3370.0], [93.2, 3370.0], [93.3, 3370.0], [93.4, 3370.0], [93.5, 3370.0], [93.6, 3370.0], [93.7, 3370.0], [93.8, 3370.0], [93.9, 3370.0], [94.0, 3384.0], [94.1, 3384.0], [94.2, 3384.0], [94.3, 3384.0], [94.4, 3384.0], [94.5, 3384.0], [94.6, 3384.0], [94.7, 3384.0], [94.8, 3384.0], [94.9, 3384.0], [95.0, 3450.0], [95.1, 3450.0], [95.2, 3450.0], [95.3, 3450.0], [95.4, 3450.0], [95.5, 3450.0], [95.6, 3450.0], [95.7, 3450.0], [95.8, 3450.0], [95.9, 3450.0], [96.0, 3469.0], [96.1, 3469.0], [96.2, 3469.0], [96.3, 3469.0], [96.4, 3469.0], [96.5, 3469.0], [96.6, 3469.0], [96.7, 3469.0], [96.8, 3469.0], [96.9, 3469.0], [97.0, 3569.0], [97.1, 3569.0], [97.2, 3569.0], [97.3, 3569.0], [97.4, 3569.0], [97.5, 3569.0], [97.6, 3569.0], [97.7, 3569.0], [97.8, 3569.0], [97.9, 3569.0], [98.0, 3704.0], [98.1, 3704.0], [98.2, 3704.0], [98.3, 3704.0], [98.4, 3704.0], [98.5, 3704.0], [98.6, 3704.0], [98.7, 3704.0], [98.8, 3704.0], [98.9, 3704.0], [99.0, 3731.0], [99.1, 3731.0], [99.2, 3731.0], [99.3, 3731.0], [99.4, 3731.0], [99.5, 3731.0], [99.6, 3731.0], [99.7, 3731.0], [99.8, 3731.0], [99.9, 3731.0]], "isOverall": false, "label": "Home Page", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 1200.0, "maxY": 24.0, "series": [{"data": [[2100.0, 1.0], [2400.0, 2.0], [2600.0, 2.0], [2700.0, 4.0], [2800.0, 5.0], [2900.0, 5.0], [3000.0, 3.0], [3100.0, 9.0], [3200.0, 24.0], [3300.0, 6.0], [3400.0, 2.0], [3500.0, 1.0], [3700.0, 2.0], [1200.0, 1.0], [1300.0, 7.0], [1400.0, 4.0], [1500.0, 4.0], [1600.0, 8.0], [1700.0, 2.0], [1800.0, 3.0], [1900.0, 3.0], [2000.0, 2.0]], "isOverall": false, "label": "Home Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3700.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 12.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 88.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 12.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 88.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 50.83000000000003, "minX": 1.6068816E12, "maxY": 50.83000000000003, "series": [{"data": [[1.6068816E12, 50.83000000000003]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6068816E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 1348.0, "minX": 1.0, "maxY": 3731.0, "series": [{"data": [[2.0, 3358.0], [3.0, 3355.0], [4.0, 3351.0], [5.0, 3330.0], [6.0, 3299.0], [7.0, 3204.0], [8.0, 3206.0], [9.0, 3201.0], [10.0, 3218.0], [11.0, 3191.0], [12.0, 3220.0], [13.0, 3246.0], [14.0, 3213.0], [15.0, 3216.0], [16.0, 3170.0], [17.0, 3731.0], [19.0, 3269.0], [21.0, 3224.3333333333335], [22.0, 3704.0], [24.0, 3340.5], [25.0, 3113.0], [27.0, 3469.0], [28.0, 2962.5], [29.0, 3450.0], [30.0, 3384.0], [31.0, 3278.0], [32.0, 3257.0], [35.0, 3273.0], [34.0, 3053.5], [37.0, 3250.0], [36.0, 2908.0], [39.0, 3173.0], [41.0, 3237.0], [40.0, 3252.0], [42.0, 3141.0], [45.0, 3239.0], [44.0, 2859.0], [47.0, 3222.0], [46.0, 3237.0], [49.0, 2832.0], [48.0, 2968.0], [51.0, 3192.0], [50.0, 3037.0], [52.0, 3178.0], [55.0, 3028.0], [54.0, 2730.0], [57.0, 2900.0], [56.0, 3044.0], [59.0, 2457.0], [58.0, 2865.0], [61.0, 2820.0], [60.0, 2703.0], [63.0, 2754.0], [62.0, 2460.0], [67.0, 1886.0], [66.0, 1904.0], [65.0, 2669.5], [71.0, 2071.0], [70.0, 1967.0], [68.0, 1948.0], [75.0, 1847.0], [74.0, 1987.0], [73.0, 1694.0], [72.0, 2009.0], [79.0, 1763.0], [78.0, 1583.0], [77.0, 1418.0], [76.0, 1834.0], [80.0, 1474.0], [87.0, 1532.0], [85.0, 1395.0], [84.0, 1474.25], [90.0, 1664.0], [89.0, 1554.0], [95.0, 1610.0], [93.0, 1653.0], [92.0, 1657.0], [99.0, 1348.0], [98.0, 1386.0], [97.0, 1415.25], [100.0, 1374.0], [1.0, 3370.0]], "isOverall": false, "label": "Home Page", "isController": false}, {"data": [[50.83000000000003, 2607.0800000000004]], "isOverall": false, "label": "Home Page-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 198.33333333333334, "minX": 1.6068816E12, "maxY": 85483.33333333333, "series": [{"data": [[1.6068816E12, 85483.33333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6068816E12, 198.33333333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6068816E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 2607.0800000000004, "minX": 1.6068816E12, "maxY": 2607.0800000000004, "series": [{"data": [[1.6068816E12, 2607.0800000000004]], "isOverall": false, "label": "Home Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6068816E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 1791.14, "minX": 1.6068816E12, "maxY": 1791.14, "series": [{"data": [[1.6068816E12, 1791.14]], "isOverall": false, "label": "Home Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6068816E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 345.47000000000014, "minX": 1.6068816E12, "maxY": 345.47000000000014, "series": [{"data": [[1.6068816E12, 345.47000000000014]], "isOverall": false, "label": "Home Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6068816E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 1233.0, "minX": 1.6068816E12, "maxY": 3731.0, "series": [{"data": [[1.6068816E12, 3731.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6068816E12, 1233.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6068816E12, 3348.9]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6068816E12, 3730.73]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6068816E12, 3446.6999999999994]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6068816E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 1513.0, "minX": 13.0, "maxY": 3246.0, "series": [{"data": [[23.0, 1513.0], [49.0, 3178.0], [13.0, 3246.0], [15.0, 1948.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 49.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 902.0, "minX": 13.0, "maxY": 2642.0, "series": [{"data": [[23.0, 902.0], [49.0, 1975.0], [13.0, 2642.0], [15.0, 1264.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 49.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.6068816E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.6068816E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6068816E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.6068816E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.6068816E12, 1.6666666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6068816E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.6068816E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.6068816E12, 1.6666666666666667]], "isOverall": false, "label": "Home Page-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6068816E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.6068816E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.6068816E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6068816E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

