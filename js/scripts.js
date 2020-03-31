$(document).ready(function() {

  $("#wordpuzzle").submit(function(event) {
    var sentence = $("#sentence").val();
    
    var vowels = ["a", "e", "i", "o", "u"];
    var index = 0

    for (index = 0; index < 5; index ++) {
      sentence = sentence.replace(vowels[index], "-");
      alert(sentence)
    }

    event.preventDefault();
  });
});