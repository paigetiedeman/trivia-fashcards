import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";

$(document).ready(function () {
  $("#question-card").hide();
  $("#questionGen").click(function () {
    $("#question-card").show();
    
    let request = new XMLHttpRequest();
    const url = `https://opentdb.com/api.php?amount=1&difficulty=easy&type=multiple`;
    
    request.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    };

    request.open("GET", url, true);
    request.send();
    
    function getElements(response) {
      $("#showQuestion").empty();
      $("#showAnswer").empty();
      
      $("#showQuestion").append(response.results[0].question);
      for (let i = 0; i < response.results[0].incorrect_answers.length; i++) {
        $("#showAnswer").append(
          "<input type='radio' name='answers' value=false>" +
          " " +
          response.results[0].incorrect_answers[i] +
          "</input><br>"
          );
        }
        $("#showAnswer").append(
          "<input type='radio' name='answers' value=true><strong>" +
          " " +
          response.results[0].correct_answer +
          "</strong></input><br>"
      );
    }
  });
  
  $("#submit").click(function () {
    if ($("#submit").val()) {
      $("#showAnswer").append("correct");
    }
  });
});

//let STORE = [];
// function createArr (response){
  //   for (let question in response.results) {
    
    // let arr = [];
    // arr.push(response.results[question].correct_answer)
    // arr.push(response.results[question].incorrect_answer[0]);
    // arr.push(response.results[question].incorrect_answer[1]);
    // arr.push(response.results[question].incorrect_answer[2]);
    // for (let i = arr.length - 1; i > 0; i--) {
      //     let j = Math.floor(Math.random() * (i + 1));
      //     [ arr[i], arr[j] ] = [ arr[j], arr[i] ];
      //   }
      // let newObj = { 
        //  question: response.results[question].question,
        // answers : arr,
// rightAnswer: response.results[question].correct_answer
//};
// STORE.push(newObj);
// }
//  
// }
