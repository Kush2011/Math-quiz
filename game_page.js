var player1_name = localStorage.getItem("player1_name");
var player2_name = localStorage.getItem("player2_name");

var player1_score = 0;
var player2_score = 0;

document.getElementById("player1_name").innerHTML=player1_name+":";
document.getElementById("player2_name").innerHTML=player2_name+":";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question-"+player1_name;
document.getElementById("player_answer").innerHTML="Answer-"+player2_name;

function send(){
    var get_word = document.getElementById("word").value;
    var word = get_word.toLowerCase();

    console.log(word);

    char1 = word.charAt(1);
    console.log(char1);

    length_divide_2 = Math.floor(word.length/2); 
    char2 = word.charAt(length_divide_2); 
    console.log(char2);
    
    length_minus_1 = word.length - 1;
    char3 = word.charAt(length_minus_1);
    console.log(char3);

    removechar1 = word.replace(char1, "_");
    removechar2 = removechar1.replace(char2, "_"); 
    removechar3 = removechar2.replace(char3, "_");

    console.log(removechar3);
    question_word = "<h4 id='word_display'> Q." + removechar3 +"</h4>";
     input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
     row = question_word + input_box + check_button ;
    document.getElementById("output").innerHTML = row; 
    document.getElementById("word").value = "";
}

question_turn = "player1";
answer_turn = "player2";