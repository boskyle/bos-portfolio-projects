$(document).ready(function () {
    


    var my_map = L.map('map_id').setView([51.505, -0.09], 13);

    
    var marker = L.marker([51.5, -0.09]).addTo(my_map);

    // add tile layer
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYm9za3lsZSIsImEiOiJja2k0eHExeW4wMGtoMnFtb3V4MjV4ZmMxIn0.uvMbmJ3_uKRxEXN9rfaE6w'
}).addTo(my_map);









});