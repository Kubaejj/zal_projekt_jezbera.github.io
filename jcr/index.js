$(document).ready(function() {
    $(".nav2 ul li").on("click", function() {
      $(this).find(".nested").toggle();
    });
  });