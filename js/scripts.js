$(document).ready(function() {
  $("button#darkmode").click(function() {
    $("body").removeClass();
    $("body").addClass("black-background");
  });

  $("button#daymode").click(function() {
    $("body").removeClass();
    $("body").addClass("white-background");
  });
});