window.onload = function() {

 fill_in_questions();

 reset_display();

}

function reset_display() {

  document.getElementById("purity_form").style.visibility = 'visible';

  document.getElementById("purity_form").style.display = 'block';

  document.getElementById("retake_button").style.visibility = 'hidden';

  document.getElementById("score_text").style.visibility = 'hidden';

}

function fill_in_questions() {

  question_bucket = document.getElementById("purity_form");

  questions = document.getElementById("questions").textContent;

  questions = questions.split("\n");

  html_content = "";

  for (var i=0; i < questions.length; i++) {

    if (questions[i].replace(/ /g, '') != "") {

      html_content += '<p><input type="checkbox" id="checkbox-' + i + '"> ' + String(i+1) + ". " + questions[i] + '</p>';

    }

  }

  question_bucket.innerHTML = html_content + '<a onclick="calculate_score()">Calculate Score</a>';

}

function calculate_score() {

  questions = document.getElementById("questions").textContent;

  question_length = questions.split("\n").length;

  score = 100;

  for (var i=0; i < question_length; i++) {

    if (questions[i].replace(/ /g, '') != "") {

      if (get_purity_of_index(i)) {

        score -= 1;

      }

    }

  }

  display_score(score);

}

function get_purity_of_index(i) {

  element = document.getElementById("checkbox-"+i);

  if (element) {

    return element.checked;

  }

  return false;

}

function display_score(score) {

  document.getElementById("your_score").innerHTML = score;

  document.getElementById("score_text").style.visibility = 'visible';

  document.getElementById("purity_form").style.visibility = 'hidden';

  document.getElementById("purity_form").style.display = 'none';

  document.getElementById("retake_button").style.visibility = 'visible';

}
