$(document).ready(function() {
  setInterval(function() {
    $('#time').text(new Date().toLocaleString());
  }, 1000);
  $('#update').click(function() {
    if (navigator.onLine) {
     applicationCache.update();
    } else {
      alert('off line!');
    }
  });
  applicationCache.addEventListener('updateready', function() {
    applicationCache.swapCache();
  });
});