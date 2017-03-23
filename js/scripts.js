$(document).ready(function(){
  $("form#form").submit(function(event) {
    var a = parseFloat($("#side-a").val());
    var b = parseFloat($("#side-b").val());
    var c = parseFloat($("#side-c").val());

      event.preventDefault();
      if ((a)&&(b)&&(c)) {
        if ((a <= 0) || (b<=0) || (c<=0)) {
        $(".answers").text("Not a triangle :(");
      } else if ((a === b) && (b === c)) {
        $(".answers").text("Equilateral!");
      } else if (((a + b) <= c) || ((b + c) <=a) || ((a + c) <= b)) {
        $(".answers").text("Not a triangle :(");
      } else if ((a === b) || (b === c) || (a === c)) {
        $(".answers").text("Isoceles!!");
      } else {
        $(".answers").text("Scalene!!");
      }
    } else {
      $(".answers").text("Please fill all fields with numbers.");
    }
    });
});
