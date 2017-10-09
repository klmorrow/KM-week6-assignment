var numbers = ['NYC', 'Austin', 'LA', 'San Francisco', 'Sydney'];
var option = '';
for (var i=0;i<numbers.length;i++){
  option += '<option value="'+ numbers[i] + '">' + numbers[i] + '</option>';
}
$('#city-type').append(option);

// $('#city-type').append('<option>NYC</option>')
// $('#city-type').append('<option>Austin</option>')
// $('#city-type').append('<option>LA</option>')
// $('#city-type').append('<option>San Francisco</option>')
// $('#city-type').append('<option>Sydney</option>')

$('#city-type').change(changeBackground)

function changeBackground() {
  if (event.target.value === 'NYC') {
  $('body').addClass('nyc');
}
  else if (event.target.value === 'Austin') {
    $('body').addClass('austin');
  }
  else if (event.target.value === 'LA') {
    $('body').addClass('la');
  }
  else if (event.target.value === 'San Francisco') {
    $('body').addClass('sf');
  }
  else if (event.target.value === 'Sydney') {
    $('body').addClass('sydney');
  }
}

// Repeat for all 5 options
// Shorten lines 2 - 6
// Use Array
// USe 'for loop'
// Loop through an array
