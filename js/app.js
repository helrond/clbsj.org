$(document).foundation();
$(document).ready(function(){
  $("button.show-more").on("click", function(){
    $(this).fadeOut(200);
    $(this).parent().next(".list-group").fadeIn(400);
  });

  $("div.callout").each(function() {
    if ($(this).data("date-filter")) {
      var now = new Date($.now()) - 2
      var post = new Date($(this).data("date-filter"))
      if (now > post) {
        $(this).hide()
      }
    }
  })

  if (!$("div.events").children("div.callout:visible").length) {
    $("div.events").append("<p>No upcoming events currently scheduled.</p>")
  }
});
