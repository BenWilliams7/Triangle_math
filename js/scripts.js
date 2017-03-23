$(document).ready(function(){
  $("form#form").submit(function(event) {


    var a = parseInt($("#side-a").val());
    var b = parseInt($("#side-b").val());
    var c = parseInt($("#side-c").val());

      event.preventDefault();
    if ((a === b) && (b === c) && (a === c)) {
      $("#tri-1").show();
    } else if ((a === b) || (b === c) || (a === c)) {
      $("#tri-2").show();
    } else if ((a + b) < c || (b + c) < a || (a + c) < b) {
      $("#noway").show();
    } else {
      $("#tri-3").show();
    }
  });
});
