$(document).foundation();
$(document).ready(function(){
  $("button.show-more").on("click", function(){
    $(this).fadeOut(200);
    $(this).parent().next(".list-group").fadeIn(400);
  });
});
