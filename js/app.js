$(document).foundation();
$(document).ready(function(){
  $("button.show-more").on("click", function(){
    $(this).fadeOut(200);
    $(this).parent().next(".list-group").fadeIn(400);
  });

  // Hide events occuring in the past
  var now = new Date($.now())
  now.setDate(now.getDate() - 1);
  $("div.callout, .filter-before-date").each(function() {
    if ($(this).data("date-filter")) {
      var post = new Date($(this).data("date-filter").split(" ")[0])
      if (now > post) {
        $(this).hide()
      }
    }
  })
  $(".filter-after-date").each(function() {
    if ($(this).data("date-filter")) {
      var post = new Date($(this).data("date-filter").split(" ")[0])
      if (now < post) {
        $(this).hide()
      }
    }
  })
  if (!$("div.events").children("div.callout:visible").length) {
    $("div.events").append("<p>No upcoming events currently scheduled.</p>")
  }
  $(".series-events").each(function() {
    console.log(this);
    if (!$(this).children("ul").children("li:visible").length) {
      $(this).hide()
    }
  })
});
