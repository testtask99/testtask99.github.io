"use strict";

var map = L.map('map').setView([46.408, 30.614], 11);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'kolibabchuk.p9keb3c0',
    accessToken: 'pk.eyJ1Ijoia29saWJhYmNodWsiLCJhIjoiY2lsOGdzMzEyMDAyaHc0a3I2YnViMGY4NCJ9.z4bRMtv0mPHyEyRzSpZEeg'
}).addTo(map);
