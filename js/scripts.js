$(document).ready(function() {

  $("#wordpuzzle").submit(function(event) {
    event.preventDefault();
    $("#sentence").hide();
    var sentence = $("#sentence").val();
    var sentenceArray = sentence.split("");
    console.log(sentenceArray)

    var vowels = ["a", "e", "i", "o", "u"];
    

    for (var i = 0; i < sentenceArray.length; i++) {
      for (var j=0; j < vowels.length; j++) {
        if(sentenceArray[i] === vowels[j]) {
          sentenceArray[i] = "-";
        };  
      };
    };
    sentence = sentenceArray.join('');
    $("#puzzle").append(sentenceArray).show();
  });
});
// var input = "123,44 44,4 56";
// var inputArr = input.split("");
// console.log(inputArr);

// var nums = [1,2,3,4,5,6,7,8];
// var outputArray = [];
// for(var i = 0; i < inputArr.length; i++){
//   for(var j=0; j < nums.length; i++){
//     if(inputArr[i] === nums[j])
//