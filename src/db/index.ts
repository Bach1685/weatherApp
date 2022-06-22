export default (async function () {
  const respons = await fetch("http://127.0.0.1:5500/src/cities.json");
  const cities = await respons.json();
  return cities;
})();
