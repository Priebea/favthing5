$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var fav1Input = $("input#favorite1").val();
    var fav2Input = $("input#favorite2").val();
    var fav3Input= $("input#favorite3").val();
    var fav4Input = $("input#favorite4").val();
    var fav5Input = $("input#favorite5").val();

    $(".favorite1").text(fav1Input);
    $(".favorite2").text(fav2Input);
    $(".favorite3").text(fav3Input);
    $(".favorite4").text(fav4Input);
    $(".favorite5").text(fav5Input);

    $("#list").show();

    event.preventDefault();
  });
});
