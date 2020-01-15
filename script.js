let map = L.map('mapid');
map.setView([51.0,24.0],6);

let OSMlayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

let circle = L.circle([50.5, 30.5],
    {radius: 100},
    {color:	'#3388ff'}).addTo(map);

let circleA = L.circle([52.08,23.10],
    {radius: 100,
    color:	'#3388ff'}).addTo(map);


let circleG = L.circle([54.22,18.38],
    {radius: 100,
     color:	'red'}).addTo(map);


let circleK = L.circle([50.53,20.37],
    {radius: 100,
    color:	'purple'}).addTo(map);

let circleZ = L.circle([51.56,15.30],
    {radius: 100,
    color:	'green'}).addTo(map);


let circleP = L.circle([52.33,19.42],
    {radius: 100,
    color:	'gray'}).addTo(map);

L.geoJSON({"type":"FeatureCollection",
    "features":[{
        "type":"Feature",
        "properties":{},
            "geometry":{
                "type":"Polygon",
                "coordinates":[[[-700.0629472732544,50.06019702298089],[-700.0600290298461,50.06019702298089],[-700.0600290298461,50.062648990114795],[-700.0629472732544,50.062648990114795],[-700.0629472732544,50.06019702298089]]]}},
                {"type":"Feature",
                "properties":{},
                "geometry":{"type":"Polygon","coordinates":[[[-700.0619173049927,50.07052749674062],[-700.0547075271605,50.07052749674062],[-700.0547075271605,50.07336454406147],[-700.0619173049927,50.07336454406147],[-700.0619173049927,50.07052749674062]]]}}]});

OSMlayer.addTo(map);
