console.log('Hello World!');

const mapboxgl = require('mapbox-gl');

mapboxgl.accessToken = 'pk.eyJ1IjoiYmV0dGVydG9uLWhhc2giLCJhIjoiY2s1d3A4eGJoMDA4ZjNtbjE3NWthMHpqMSJ9.a2oAEoWFDZ6fBukN5GWNfw';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const coords = [-74.009, 40.705];

 new mapboxgl.Marker().setLngLat(coords).addTo(map);


