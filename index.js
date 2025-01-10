function showGrade() {
    let input = document.getElementById("score").value.trim();
    let result = document.getElementById("grade");
    let gradeSoundA = document.getElementById("grade-sound-A");
    let gradeSoundB = document.getElementById("grade-sound-B");
    let gradeSoundD = document.getElementById("grade-sound-D");
  
    let inputScore = parseFloat(input);
    if (isNaN(inputScore) || inputScore < 0 || inputScore > 100) {
      result.textContent = "please enter a valid number";
      result.style.color = "black";
      return;
    } else {
      let grade = "";
      if (inputScore >= 80) {
        grade = "Excellent😀";
        result.style.color = "green";
        result.style.fontSize = "1.1em";
        result.style.fontWeight = "bold";
        gradeSoundA.play();
      } else if (inputScore >= 60) {
        grade = "B - Good🙂";
        gradeSoundB.play('sound/mixkit-crowd-in-church-applauding-484.wav');
      } else if (inputScore >= 50) {
        grade = "C- Average😐";
      } else if (inputScore >= 40) {
        grade = "D- Pass😒";
        gradeSoundD.play();
      } else  {
        grade = "F- Fail🙁";
        gradeSoundD.play("audios/gerarahere.mp3");
      }
  
      result.textContent = ` ${grade}`;
    }
  }
  