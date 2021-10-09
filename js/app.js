$(document).foundation();
$(document).ready(function () {

  $('button.show-more').on('click', function () {
    $(this).fadeOut(200)
    $(this).parent().next('.list-group').fadeIn(400)
  })

  var now = new Date($.now())
  now.setDate(now.getDate() - 1)
  now.setHours(now.getHours() - 2)
  $('.filter-before-date').each(function () {
    if ($(this).data('date-filter')) {
      var post = new Date($(this).data('date-filter').split(' ')[0])
      if (now > post) {
        $(this).hide()
      }
    }
  })

  $('.filter-after-date').each(function () {
    if ($(this).data('date-filter')) {
      var post = new Date($(this).data('date-filter').split(' ')[0])
      if (now < post) {
        $(this).hide()
      }
    }
  })

  if (!$('div.events').children('div.callout:visible').length) {
    $('div.events').append('<p>No upcoming events currently scheduled.</p>')
  }

  $('.series-events').each(function () {
    console.log(this);
    if (!$(this).children('ul').children('li:visible').length) {
      $(this).hide()
    }
  })
})
