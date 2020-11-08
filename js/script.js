document.addEventListener('DOMContentLoaded', function() {
  let trigger = new ScrollTrigger({
    offset:{
      x:0,
      y:230
    },
    toggle:{
      visible: 'animateIn',
      hidden: 'animateOut'
    },
    once:true
  });
});

$(document).ready(function() {
  $('#drop_down_menu_parents').on('click', function(){
    $('#drop_down_menu').slideToggle('fast');
  });
});