function checkQuestionOne() 
{ 
    let correctAnswer = 11;
    let guess = Number(document.querySelector("#q1-input").value);

    console.log(guess);
    console.log(correctAnswer);

    if (guess == correctAnswer)
    {
        document.querySelector("#q1-result").textContent = "Correct!";
        score += 1;
        document.querySelector("#score").textContent = `Score: ${score}`;
    }
    else
    {
        document.querySelector("#q1-result").textContent = "Incorrect. Try again.";
        score -= 1;
        document.querySelector("#score").textContent = `Score: ${score}`;
    }
}

function checkQuestionTwo()
{
    let correctAnswer = "blue";
    let guess = String(document.querySelector("#q2-input").value).toLowerCase();

    if (guess === correctAnswer)
    {
        document.querySelector("#q2-result").textContent = "Correct!";
        document.querySelector("#score").textContent = "Score:  " + score;
    }
    else
    {
        document.querySelector("#q2-result").textContent = "Incorrect. Try again.";
        score -= 1;
        document.querySelector("#score").textContent = "Score:  " + score;
    }
}

function checkAll()
{
    checkQuestionOne();
    checkQuestionTwo();
    document.querySelector("#q2-result, #q1-result").textContent = "Correct!";
    score += 1;
    document.querySelector("#q2-result, #q1-result").textContent = "Incorrect. Try again.";
    document.querySelector("#score").textContent = "Score:  " + score;
}
