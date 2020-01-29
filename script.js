require (["esri/Map", "esri/views/MapView", "esri/WebMap", "esri/geometry/support/webMercatorUtils", "esri/widgets/BasemapToggle",
"esri/widgets/BasemapGallery"],
   function(Map, MapView, WebMap, webMercatorUtils, BasemapToggle, BasemapGallery)
   {
    let map1 = new Map({basemap:"topo"});
    let map2 = new Map({basemap:"satellite"});
    let map3 = new Map({basemap:"osm"});
    let map4 = new WebMap({
        portalItem: {
            id: "aabc0528c401489d97fd0e473a98a2a6"
         }
    });

    let mapContainer = new MapView({
        container: "mapid",
        map: map4 
        
      });
    
    document.getElementById("przycisk").onclick = function() {
        console.log('klik');
        mapContainer.map = map2;
    };
    document.getElementById("przycisk2").onclick = function() {
        console.log('klik');
        mapContainer.map = map1;
    };
    document.getElementById("przycisk3").onclick = function() {
        console.log('klik');
        mapContainer.map = map3;
    };
    document.getElementById("przycisk4").onclick = function() {
        console.log('klik');
        mapContainer.map = map4;
    };
    mapContainer.on("click", function(evt){
      let cords = webMercatorUtils.webMercatorToGeographic(evt.mapPoint);
      console.log(cords.x);
      console.log(cords.y);
  });
   });