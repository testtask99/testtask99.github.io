var map = L.map('map').setView([46.408, 30.614], 11);
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      id: 'kolibabchuk.p9keb3c0',
      accessToken: 'pk.eyJ1Ijoia29saWJhYmNodWsiLCJhIjoiY2lsOGdzMzEyMDAyaHc0a3I2YnViMGY4NCJ9.z4bRMtv0mPHyEyRzSpZEeg'
}).addTo(map);
