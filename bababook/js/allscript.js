$(window).load((function(){$(".loader").fadeOut("slow")}));

$(function() {
    $('#wdeposit').on('click', 'button', function(e) {
     const phone = '7970629524';
      let text = []
      $form.serializeArray().forEach(v => text.push(v.name.charAt(0).toUpperCase() + v.name.slice(1) + ': ' + v.value))
  
      // make the url, join text with a new line
      const action = "https://wa.me/" + phone + "?text=" + encodeURIComponent(text.join('\n'));
      
    });
  });