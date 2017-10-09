var cities = ['nyc', 'austin', 'la', 'sf', 'sydney'];
cities.forEach(function(city) {
  addToList(city);
})

function addToList(city) {
    $('#city-type').append('<option>' + city.toUpperCase() + '</option>')
}

$('#city-type').change(changeBackground)

function changeBackground() {
  var selectBox = event.target
  var input = selectBox.value.toLowerCase()
  cities.forEach(function(city) {
    if (input === city) {
    clearBackground();
    $('body').addClass(city);
  }
  })
}

function clearBackground() {
  $('body').removeClass('nyc austin la sf sydney');
}

<!-- For Loop option -->
// var option = '';
// for (var i=0;i<cities.length;i++){
//   option += '<option value="'+ cities[i] + '">' + cities[i] + '</option>';
// }
