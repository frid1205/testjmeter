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
        data: {"result": {"minY": 79.0, "minX": 0.0, "maxY": 329.0, "series": [{"data": [[0.0, 79.0], [0.1, 79.0], [0.2, 79.0], [0.3, 79.0], [0.4, 79.0], [0.5, 79.0], [0.6, 79.0], [0.7, 79.0], [0.8, 79.0], [0.9, 79.0], [1.0, 79.0], [1.1, 79.0], [1.2, 83.0], [1.3, 83.0], [1.4, 83.0], [1.5, 83.0], [1.6, 83.0], [1.7, 83.0], [1.8, 83.0], [1.9, 83.0], [2.0, 83.0], [2.1, 83.0], [2.2, 83.0], [2.3, 85.0], [2.4, 85.0], [2.5, 85.0], [2.6, 85.0], [2.7, 85.0], [2.8, 85.0], [2.9, 85.0], [3.0, 85.0], [3.1, 85.0], [3.2, 85.0], [3.3, 85.0], [3.4, 91.0], [3.5, 91.0], [3.6, 91.0], [3.7, 91.0], [3.8, 91.0], [3.9, 91.0], [4.0, 91.0], [4.1, 91.0], [4.2, 91.0], [4.3, 91.0], [4.4, 91.0], [4.5, 92.0], [4.6, 92.0], [4.7, 92.0], [4.8, 92.0], [4.9, 92.0], [5.0, 92.0], [5.1, 92.0], [5.2, 92.0], [5.3, 92.0], [5.4, 92.0], [5.5, 92.0], [5.6, 93.0], [5.7, 93.0], [5.8, 93.0], [5.9, 93.0], [6.0, 93.0], [6.1, 93.0], [6.2, 93.0], [6.3, 93.0], [6.4, 93.0], [6.5, 93.0], [6.6, 93.0], [6.7, 93.0], [6.8, 93.0], [6.9, 93.0], [7.0, 93.0], [7.1, 93.0], [7.2, 93.0], [7.3, 93.0], [7.4, 93.0], [7.5, 93.0], [7.6, 93.0], [7.7, 93.0], [7.8, 95.0], [7.9, 95.0], [8.0, 95.0], [8.1, 95.0], [8.2, 95.0], [8.3, 95.0], [8.4, 95.0], [8.5, 95.0], [8.6, 95.0], [8.7, 95.0], [8.8, 95.0], [8.9, 95.0], [9.0, 95.0], [9.1, 95.0], [9.2, 95.0], [9.3, 95.0], [9.4, 95.0], [9.5, 95.0], [9.6, 95.0], [9.7, 95.0], [9.8, 95.0], [9.9, 95.0], [10.0, 96.0], [10.1, 96.0], [10.2, 96.0], [10.3, 96.0], [10.4, 96.0], [10.5, 96.0], [10.6, 96.0], [10.7, 96.0], [10.8, 96.0], [10.9, 96.0], [11.0, 96.0], [11.1, 96.0], [11.2, 96.0], [11.3, 96.0], [11.4, 96.0], [11.5, 96.0], [11.6, 96.0], [11.7, 96.0], [11.8, 96.0], [11.9, 96.0], [12.0, 96.0], [12.1, 96.0], [12.2, 96.0], [12.3, 96.0], [12.4, 96.0], [12.5, 96.0], [12.6, 96.0], [12.7, 96.0], [12.8, 96.0], [12.9, 96.0], [13.0, 96.0], [13.1, 96.0], [13.2, 96.0], [13.3, 96.0], [13.4, 97.0], [13.5, 97.0], [13.6, 97.0], [13.7, 97.0], [13.8, 97.0], [13.9, 97.0], [14.0, 97.0], [14.1, 97.0], [14.2, 97.0], [14.3, 97.0], [14.4, 97.0], [14.5, 97.0], [14.6, 97.0], [14.7, 97.0], [14.8, 97.0], [14.9, 97.0], [15.0, 97.0], [15.1, 97.0], [15.2, 97.0], [15.3, 97.0], [15.4, 97.0], [15.5, 97.0], [15.6, 98.0], [15.7, 98.0], [15.8, 98.0], [15.9, 98.0], [16.0, 98.0], [16.1, 98.0], [16.2, 98.0], [16.3, 98.0], [16.4, 98.0], [16.5, 98.0], [16.6, 98.0], [16.7, 101.0], [16.8, 101.0], [16.9, 101.0], [17.0, 101.0], [17.1, 101.0], [17.2, 101.0], [17.3, 101.0], [17.4, 101.0], [17.5, 101.0], [17.6, 101.0], [17.7, 101.0], [17.8, 102.0], [17.9, 102.0], [18.0, 102.0], [18.1, 102.0], [18.2, 102.0], [18.3, 102.0], [18.4, 102.0], [18.5, 102.0], [18.6, 102.0], [18.7, 102.0], [18.8, 102.0], [18.9, 103.0], [19.0, 103.0], [19.1, 103.0], [19.2, 103.0], [19.3, 103.0], [19.4, 103.0], [19.5, 103.0], [19.6, 103.0], [19.7, 103.0], [19.8, 103.0], [19.9, 103.0], [20.0, 103.0], [20.1, 103.0], [20.2, 103.0], [20.3, 103.0], [20.4, 103.0], [20.5, 103.0], [20.6, 103.0], [20.7, 103.0], [20.8, 103.0], [20.9, 103.0], [21.0, 103.0], [21.1, 103.0], [21.2, 103.0], [21.3, 103.0], [21.4, 103.0], [21.5, 103.0], [21.6, 103.0], [21.7, 103.0], [21.8, 103.0], [21.9, 103.0], [22.0, 103.0], [22.1, 103.0], [22.2, 103.0], [22.3, 104.0], [22.4, 104.0], [22.5, 104.0], [22.6, 104.0], [22.7, 104.0], [22.8, 104.0], [22.9, 104.0], [23.0, 104.0], [23.1, 104.0], [23.2, 104.0], [23.3, 104.0], [23.4, 104.0], [23.5, 104.0], [23.6, 104.0], [23.7, 104.0], [23.8, 104.0], [23.9, 104.0], [24.0, 104.0], [24.1, 104.0], [24.2, 104.0], [24.3, 104.0], [24.4, 104.0], [24.5, 105.0], [24.6, 105.0], [24.7, 105.0], [24.8, 105.0], [24.9, 105.0], [25.0, 105.0], [25.1, 105.0], [25.2, 105.0], [25.3, 105.0], [25.4, 105.0], [25.5, 105.0], [25.6, 106.0], [25.7, 106.0], [25.8, 106.0], [25.9, 106.0], [26.0, 106.0], [26.1, 106.0], [26.2, 106.0], [26.3, 106.0], [26.4, 106.0], [26.5, 106.0], [26.6, 106.0], [26.7, 108.0], [26.8, 108.0], [26.9, 108.0], [27.0, 108.0], [27.1, 108.0], [27.2, 108.0], [27.3, 108.0], [27.4, 108.0], [27.5, 108.0], [27.6, 108.0], [27.7, 108.0], [27.8, 109.0], [27.9, 109.0], [28.0, 109.0], [28.1, 109.0], [28.2, 109.0], [28.3, 109.0], [28.4, 109.0], [28.5, 109.0], [28.6, 109.0], [28.7, 109.0], [28.8, 109.0], [28.9, 110.0], [29.0, 110.0], [29.1, 110.0], [29.2, 110.0], [29.3, 110.0], [29.4, 110.0], [29.5, 110.0], [29.6, 110.0], [29.7, 110.0], [29.8, 110.0], [29.9, 110.0], [30.0, 110.0], [30.1, 110.0], [30.2, 110.0], [30.3, 110.0], [30.4, 110.0], [30.5, 110.0], [30.6, 110.0], [30.7, 110.0], [30.8, 110.0], [30.9, 110.0], [31.0, 110.0], [31.1, 110.0], [31.2, 110.0], [31.3, 110.0], [31.4, 110.0], [31.5, 110.0], [31.6, 110.0], [31.7, 110.0], [31.8, 110.0], [31.9, 110.0], [32.0, 110.0], [32.1, 110.0], [32.2, 110.0], [32.3, 111.0], [32.4, 111.0], [32.5, 111.0], [32.6, 111.0], [32.7, 111.0], [32.8, 111.0], [32.9, 111.0], [33.0, 111.0], [33.1, 111.0], [33.2, 111.0], [33.3, 111.0], [33.4, 112.0], [33.5, 112.0], [33.6, 112.0], [33.7, 112.0], [33.8, 112.0], [33.9, 112.0], [34.0, 112.0], [34.1, 112.0], [34.2, 112.0], [34.3, 112.0], [34.4, 112.0], [34.5, 112.0], [34.6, 112.0], [34.7, 112.0], [34.8, 112.0], [34.9, 112.0], [35.0, 112.0], [35.1, 112.0], [35.2, 112.0], [35.3, 112.0], [35.4, 112.0], [35.5, 112.0], [35.6, 114.0], [35.7, 114.0], [35.8, 114.0], [35.9, 114.0], [36.0, 114.0], [36.1, 114.0], [36.2, 114.0], [36.3, 114.0], [36.4, 114.0], [36.5, 114.0], [36.6, 114.0], [36.7, 115.0], [36.8, 115.0], [36.9, 115.0], [37.0, 115.0], [37.1, 115.0], [37.2, 115.0], [37.3, 115.0], [37.4, 115.0], [37.5, 115.0], [37.6, 115.0], [37.7, 115.0], [37.8, 115.0], [37.9, 115.0], [38.0, 115.0], [38.1, 115.0], [38.2, 115.0], [38.3, 115.0], [38.4, 115.0], [38.5, 115.0], [38.6, 115.0], [38.7, 115.0], [38.8, 115.0], [38.9, 116.0], [39.0, 116.0], [39.1, 116.0], [39.2, 116.0], [39.3, 116.0], [39.4, 116.0], [39.5, 116.0], [39.6, 116.0], [39.7, 116.0], [39.8, 116.0], [39.9, 116.0], [40.0, 116.0], [40.1, 117.0], [40.2, 117.0], [40.3, 117.0], [40.4, 117.0], [40.5, 117.0], [40.6, 117.0], [40.7, 117.0], [40.8, 117.0], [40.9, 117.0], [41.0, 117.0], [41.1, 117.0], [41.2, 118.0], [41.3, 118.0], [41.4, 118.0], [41.5, 118.0], [41.6, 118.0], [41.7, 118.0], [41.8, 118.0], [41.9, 118.0], [42.0, 118.0], [42.1, 118.0], [42.2, 118.0], [42.3, 120.0], [42.4, 120.0], [42.5, 120.0], [42.6, 120.0], [42.7, 120.0], [42.8, 120.0], [42.9, 120.0], [43.0, 120.0], [43.1, 120.0], [43.2, 120.0], [43.3, 120.0], [43.4, 122.0], [43.5, 122.0], [43.6, 122.0], [43.7, 122.0], [43.8, 122.0], [43.9, 122.0], [44.0, 122.0], [44.1, 122.0], [44.2, 122.0], [44.3, 122.0], [44.4, 122.0], [44.5, 123.0], [44.6, 123.0], [44.7, 123.0], [44.8, 123.0], [44.9, 123.0], [45.0, 123.0], [45.1, 123.0], [45.2, 123.0], [45.3, 123.0], [45.4, 123.0], [45.5, 123.0], [45.6, 125.0], [45.7, 125.0], [45.8, 125.0], [45.9, 125.0], [46.0, 125.0], [46.1, 125.0], [46.2, 125.0], [46.3, 125.0], [46.4, 125.0], [46.5, 125.0], [46.6, 125.0], [46.7, 136.0], [46.8, 136.0], [46.9, 136.0], [47.0, 136.0], [47.1, 136.0], [47.2, 136.0], [47.3, 136.0], [47.4, 136.0], [47.5, 136.0], [47.6, 136.0], [47.7, 136.0], [47.8, 144.0], [47.9, 144.0], [48.0, 144.0], [48.1, 144.0], [48.2, 144.0], [48.3, 144.0], [48.4, 144.0], [48.5, 144.0], [48.6, 144.0], [48.7, 144.0], [48.8, 144.0], [48.9, 146.0], [49.0, 146.0], [49.1, 146.0], [49.2, 146.0], [49.3, 146.0], [49.4, 146.0], [49.5, 146.0], [49.6, 146.0], [49.7, 146.0], [49.8, 146.0], [49.9, 146.0], [50.0, 146.0], [50.1, 166.0], [50.2, 166.0], [50.3, 166.0], [50.4, 166.0], [50.5, 166.0], [50.6, 166.0], [50.7, 166.0], [50.8, 166.0], [50.9, 166.0], [51.0, 166.0], [51.1, 166.0], [51.2, 167.0], [51.3, 167.0], [51.4, 167.0], [51.5, 167.0], [51.6, 167.0], [51.7, 167.0], [51.8, 167.0], [51.9, 167.0], [52.0, 167.0], [52.1, 167.0], [52.2, 167.0], [52.3, 172.0], [52.4, 172.0], [52.5, 172.0], [52.6, 172.0], [52.7, 172.0], [52.8, 172.0], [52.9, 172.0], [53.0, 172.0], [53.1, 172.0], [53.2, 172.0], [53.3, 172.0], [53.4, 176.0], [53.5, 176.0], [53.6, 176.0], [53.7, 176.0], [53.8, 176.0], [53.9, 176.0], [54.0, 176.0], [54.1, 176.0], [54.2, 176.0], [54.3, 176.0], [54.4, 176.0], [54.5, 176.0], [54.6, 176.0], [54.7, 176.0], [54.8, 176.0], [54.9, 176.0], [55.0, 176.0], [55.1, 176.0], [55.2, 176.0], [55.3, 176.0], [55.4, 176.0], [55.5, 176.0], [55.6, 176.0], [55.7, 176.0], [55.8, 176.0], [55.9, 176.0], [56.0, 176.0], [56.1, 176.0], [56.2, 176.0], [56.3, 176.0], [56.4, 176.0], [56.5, 176.0], [56.6, 176.0], [56.7, 183.0], [56.8, 183.0], [56.9, 183.0], [57.0, 183.0], [57.1, 183.0], [57.2, 183.0], [57.3, 183.0], [57.4, 183.0], [57.5, 183.0], [57.6, 183.0], [57.7, 183.0], [57.8, 190.0], [57.9, 190.0], [58.0, 190.0], [58.1, 190.0], [58.2, 190.0], [58.3, 190.0], [58.4, 190.0], [58.5, 190.0], [58.6, 190.0], [58.7, 190.0], [58.8, 190.0], [58.9, 192.0], [59.0, 192.0], [59.1, 192.0], [59.2, 192.0], [59.3, 192.0], [59.4, 192.0], [59.5, 192.0], [59.6, 192.0], [59.7, 192.0], [59.8, 192.0], [59.9, 192.0], [60.0, 192.0], [60.1, 198.0], [60.2, 198.0], [60.3, 198.0], [60.4, 198.0], [60.5, 198.0], [60.6, 198.0], [60.7, 198.0], [60.8, 198.0], [60.9, 198.0], [61.0, 198.0], [61.1, 198.0], [61.2, 204.0], [61.3, 204.0], [61.4, 204.0], [61.5, 204.0], [61.6, 204.0], [61.7, 204.0], [61.8, 204.0], [61.9, 204.0], [62.0, 204.0], [62.1, 204.0], [62.2, 204.0], [62.3, 205.0], [62.4, 205.0], [62.5, 205.0], [62.6, 205.0], [62.7, 205.0], [62.8, 205.0], [62.9, 205.0], [63.0, 205.0], [63.1, 205.0], [63.2, 205.0], [63.3, 205.0], [63.4, 205.0], [63.5, 205.0], [63.6, 205.0], [63.7, 205.0], [63.8, 205.0], [63.9, 205.0], [64.0, 205.0], [64.1, 205.0], [64.2, 205.0], [64.3, 205.0], [64.4, 205.0], [64.5, 208.0], [64.6, 208.0], [64.7, 208.0], [64.8, 208.0], [64.9, 208.0], [65.0, 208.0], [65.1, 208.0], [65.2, 208.0], [65.3, 208.0], [65.4, 208.0], [65.5, 208.0], [65.6, 210.0], [65.7, 210.0], [65.8, 210.0], [65.9, 210.0], [66.0, 210.0], [66.1, 210.0], [66.2, 210.0], [66.3, 210.0], [66.4, 210.0], [66.5, 210.0], [66.6, 210.0], [66.7, 217.0], [66.8, 217.0], [66.9, 217.0], [67.0, 217.0], [67.1, 217.0], [67.2, 217.0], [67.3, 217.0], [67.4, 217.0], [67.5, 217.0], [67.6, 217.0], [67.7, 217.0], [67.8, 219.0], [67.9, 219.0], [68.0, 219.0], [68.1, 219.0], [68.2, 219.0], [68.3, 219.0], [68.4, 219.0], [68.5, 219.0], [68.6, 219.0], [68.7, 219.0], [68.8, 219.0], [68.9, 230.0], [69.0, 230.0], [69.1, 230.0], [69.2, 230.0], [69.3, 230.0], [69.4, 230.0], [69.5, 230.0], [69.6, 230.0], [69.7, 230.0], [69.8, 230.0], [69.9, 230.0], [70.0, 230.0], [70.1, 231.0], [70.2, 231.0], [70.3, 231.0], [70.4, 231.0], [70.5, 231.0], [70.6, 231.0], [70.7, 231.0], [70.8, 231.0], [70.9, 231.0], [71.0, 231.0], [71.1, 231.0], [71.2, 232.0], [71.3, 232.0], [71.4, 232.0], [71.5, 232.0], [71.6, 232.0], [71.7, 232.0], [71.8, 232.0], [71.9, 232.0], [72.0, 232.0], [72.1, 232.0], [72.2, 232.0], [72.3, 233.0], [72.4, 233.0], [72.5, 233.0], [72.6, 233.0], [72.7, 233.0], [72.8, 233.0], [72.9, 233.0], [73.0, 233.0], [73.1, 233.0], [73.2, 233.0], [73.3, 233.0], [73.4, 236.0], [73.5, 236.0], [73.6, 236.0], [73.7, 236.0], [73.8, 236.0], [73.9, 236.0], [74.0, 236.0], [74.1, 236.0], [74.2, 236.0], [74.3, 236.0], [74.4, 236.0], [74.5, 236.0], [74.6, 236.0], [74.7, 236.0], [74.8, 236.0], [74.9, 236.0], [75.0, 236.0], [75.1, 236.0], [75.2, 236.0], [75.3, 236.0], [75.4, 236.0], [75.5, 236.0], [75.6, 237.0], [75.7, 237.0], [75.8, 237.0], [75.9, 237.0], [76.0, 237.0], [76.1, 237.0], [76.2, 237.0], [76.3, 237.0], [76.4, 237.0], [76.5, 237.0], [76.6, 237.0], [76.7, 237.0], [76.8, 237.0], [76.9, 237.0], [77.0, 237.0], [77.1, 237.0], [77.2, 237.0], [77.3, 237.0], [77.4, 237.0], [77.5, 237.0], [77.6, 237.0], [77.7, 237.0], [77.8, 238.0], [77.9, 238.0], [78.0, 238.0], [78.1, 238.0], [78.2, 238.0], [78.3, 238.0], [78.4, 238.0], [78.5, 238.0], [78.6, 238.0], [78.7, 238.0], [78.8, 238.0], [78.9, 239.0], [79.0, 239.0], [79.1, 239.0], [79.2, 239.0], [79.3, 239.0], [79.4, 239.0], [79.5, 239.0], [79.6, 239.0], [79.7, 239.0], [79.8, 239.0], [79.9, 239.0], [80.0, 239.0], [80.1, 240.0], [80.2, 240.0], [80.3, 240.0], [80.4, 240.0], [80.5, 240.0], [80.6, 240.0], [80.7, 240.0], [80.8, 240.0], [80.9, 240.0], [81.0, 240.0], [81.1, 240.0], [81.2, 242.0], [81.3, 242.0], [81.4, 242.0], [81.5, 242.0], [81.6, 242.0], [81.7, 242.0], [81.8, 242.0], [81.9, 242.0], [82.0, 242.0], [82.1, 242.0], [82.2, 242.0], [82.3, 245.0], [82.4, 245.0], [82.5, 245.0], [82.6, 245.0], [82.7, 245.0], [82.8, 245.0], [82.9, 245.0], [83.0, 245.0], [83.1, 245.0], [83.2, 245.0], [83.3, 245.0], [83.4, 245.0], [83.5, 245.0], [83.6, 245.0], [83.7, 245.0], [83.8, 245.0], [83.9, 245.0], [84.0, 245.0], [84.1, 245.0], [84.2, 245.0], [84.3, 245.0], [84.4, 245.0], [84.5, 248.0], [84.6, 248.0], [84.7, 248.0], [84.8, 248.0], [84.9, 248.0], [85.0, 248.0], [85.1, 248.0], [85.2, 248.0], [85.3, 248.0], [85.4, 248.0], [85.5, 248.0], [85.6, 253.0], [85.7, 253.0], [85.8, 253.0], [85.9, 253.0], [86.0, 253.0], [86.1, 253.0], [86.2, 253.0], [86.3, 253.0], [86.4, 253.0], [86.5, 253.0], [86.6, 253.0], [86.7, 260.0], [86.8, 260.0], [86.9, 260.0], [87.0, 260.0], [87.1, 260.0], [87.2, 260.0], [87.3, 260.0], [87.4, 260.0], [87.5, 260.0], [87.6, 260.0], [87.7, 260.0], [87.8, 266.0], [87.9, 266.0], [88.0, 266.0], [88.1, 266.0], [88.2, 266.0], [88.3, 266.0], [88.4, 266.0], [88.5, 266.0], [88.6, 266.0], [88.7, 266.0], [88.8, 266.0], [88.9, 270.0], [89.0, 270.0], [89.1, 270.0], [89.2, 270.0], [89.3, 270.0], [89.4, 270.0], [89.5, 270.0], [89.6, 270.0], [89.7, 270.0], [89.8, 270.0], [89.9, 270.0], [90.0, 270.0], [90.1, 295.0], [90.2, 295.0], [90.3, 295.0], [90.4, 295.0], [90.5, 295.0], [90.6, 295.0], [90.7, 295.0], [90.8, 295.0], [90.9, 295.0], [91.0, 295.0], [91.1, 295.0], [91.2, 306.0], [91.3, 306.0], [91.4, 306.0], [91.5, 306.0], [91.6, 306.0], [91.7, 306.0], [91.8, 306.0], [91.9, 306.0], [92.0, 306.0], [92.1, 306.0], [92.2, 306.0], [92.3, 312.0], [92.4, 312.0], [92.5, 312.0], [92.6, 312.0], [92.7, 312.0], [92.8, 312.0], [92.9, 312.0], [93.0, 312.0], [93.1, 312.0], [93.2, 312.0], [93.3, 312.0], [93.4, 315.0], [93.5, 315.0], [93.6, 315.0], [93.7, 315.0], [93.8, 315.0], [93.9, 315.0], [94.0, 315.0], [94.1, 315.0], [94.2, 315.0], [94.3, 315.0], [94.4, 315.0], [94.5, 318.0], [94.6, 318.0], [94.7, 318.0], [94.8, 318.0], [94.9, 318.0], [95.0, 318.0], [95.1, 318.0], [95.2, 318.0], [95.3, 318.0], [95.4, 318.0], [95.5, 318.0], [95.6, 322.0], [95.7, 322.0], [95.8, 322.0], [95.9, 322.0], [96.0, 322.0], [96.1, 322.0], [96.2, 322.0], [96.3, 322.0], [96.4, 322.0], [96.5, 322.0], [96.6, 322.0], [96.7, 324.0], [96.8, 324.0], [96.9, 324.0], [97.0, 324.0], [97.1, 324.0], [97.2, 324.0], [97.3, 324.0], [97.4, 324.0], [97.5, 324.0], [97.6, 324.0], [97.7, 324.0], [97.8, 326.0], [97.9, 326.0], [98.0, 326.0], [98.1, 326.0], [98.2, 326.0], [98.3, 326.0], [98.4, 326.0], [98.5, 326.0], [98.6, 326.0], [98.7, 326.0], [98.8, 326.0], [98.9, 329.0], [99.0, 329.0], [99.1, 329.0], [99.2, 329.0], [99.3, 329.0], [99.4, 329.0], [99.5, 329.0], [99.6, 329.0], [99.7, 329.0], [99.8, 329.0], [99.9, 329.0], [100.0, 329.0]], "isOverall": false, "label": "Home Page", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 8.0, "minX": 0.0, "maxY": 40.0, "series": [{"data": [[0.0, 15.0], [300.0, 8.0], [100.0, 40.0], [200.0, 27.0]], "isOverall": false, "label": "Home Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 90.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 90.0, "series": [{"data": [[0.0, 90.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 18.366666666666667, "minX": 1.60688046E12, "maxY": 18.366666666666667, "series": [{"data": [[1.60688046E12, 18.366666666666667]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60688046E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 79.0, "minX": 1.0, "maxY": 327.5, "series": [{"data": [[33.0, 244.0], [32.0, 226.33333333333334], [2.0, 105.0], [35.0, 222.0], [34.0, 236.5], [3.0, 92.0], [4.0, 97.0], [5.0, 110.0], [7.0, 99.0], [8.0, 79.0], [9.0, 95.9], [10.0, 103.62499999999999], [11.0, 109.7], [12.0, 120.5], [13.0, 144.33333333333334], [16.0, 171.0], [1.0, 110.0], [19.0, 178.66666666666666], [20.0, 225.0], [21.0, 204.8], [23.0, 327.5], [24.0, 221.0], [25.0, 248.0], [26.0, 255.66666666666666], [27.0, 234.5], [28.0, 259.5], [29.0, 232.0], [30.0, 310.3333333333333]], "isOverall": false, "label": "Home Page", "isController": false}, {"data": [[18.366666666666667, 172.65555555555545]], "isOverall": false, "label": "Home Page-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 35.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 184.5, "minX": 1.60688046E12, "maxY": 766.5, "series": [{"data": [[1.60688046E12, 766.5]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60688046E12, 184.5]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60688046E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 172.65555555555545, "minX": 1.60688046E12, "maxY": 172.65555555555545, "series": [{"data": [[1.60688046E12, 172.65555555555545]], "isOverall": false, "label": "Home Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60688046E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 172.50000000000003, "minX": 1.60688046E12, "maxY": 172.50000000000003, "series": [{"data": [[1.60688046E12, 172.50000000000003]], "isOverall": false, "label": "Home Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60688046E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 63.96666666666665, "minX": 1.60688046E12, "maxY": 63.96666666666665, "series": [{"data": [[1.60688046E12, 63.96666666666665]], "isOverall": false, "label": "Home Page", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60688046E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 79.0, "minX": 1.60688046E12, "maxY": 329.0, "series": [{"data": [[1.60688046E12, 329.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60688046E12, 79.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60688046E12, 292.5000000000001]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60688046E12, 329.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60688046E12, 319.8]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60688046E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 119.0, "minX": 14.0, "maxY": 232.5, "series": [{"data": [[76.0, 119.0], [14.0, 232.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 76.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 119.0, "minX": 14.0, "maxY": 232.5, "series": [{"data": [[76.0, 119.0], [14.0, 232.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 76.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.5, "minX": 1.60688046E12, "maxY": 1.5, "series": [{"data": [[1.60688046E12, 1.5]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60688046E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.5, "minX": 1.60688046E12, "maxY": 1.5, "series": [{"data": [[1.60688046E12, 1.5]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60688046E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.5, "minX": 1.60688046E12, "maxY": 1.5, "series": [{"data": [[1.60688046E12, 1.5]], "isOverall": false, "label": "Home Page-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60688046E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.5, "minX": 1.60688046E12, "maxY": 1.5, "series": [{"data": [[1.60688046E12, 1.5]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60688046E12, "title": "Total Transactions Per Second"}},
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

