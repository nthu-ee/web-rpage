// the following are by RPage official team

$(function() {
  $.hajaxOpenUrl('/app/index.php?Action=mobileloadmod&Type=mobilesch&Nbr=0', '#hd_search');
  $('.navbar-toggle[data-target=".nav-toggle"]').click(function() {
    if ($('#collapseExample').hasClass('in')) {
      $('.navbar-toggle1[href="#collapseExample"]').removeClass('open');
      $('#collapseExample').removeClass('in').css({ 'height': '0', 'overflow': 'hidden' });
    }
    $(this).toggleClass('open');
  });
});
