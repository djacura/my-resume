function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3,
    center: {
      lat: 46.619261,
      lng: -33.134766,
    },
  });

  const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const locations = [
    { lat: 51.386631, lng: -0.739817 },
    { lat: 51.391048, lng: -1.062829 },
    { lat: 51.330329, lng: -0.874957 },
  ];

  const markers = locations.map((location, i) => {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length],
    });
  });

  new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
}
