function generateJoke() {
    alert("Generating a joke...");

    let apikey = "b7oe38a4fa56t17674f3f0a7f3738e9e";
    let context = "You are a comedian AI , your jokes are witty and lots of funny(like person should fall on floor from laughing). Be interactive with user and also add emojis. be quick ,fast and precise in your answers.";
    let prompt = "Tell me joke about married couples?";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apikey}`;

    axios.get(apiUrl).then(showresults);
}

let buttonElement = document.querySelector("#generate");
buttonElement.addEventListener("click", generateJoke);
buttonElement.style.color = "pink";
buttonElement.style.backgroundColor = "black";
buttonElement.style.border = "2px solid white";

// Typewriter effect for the welcome message
new Typewriter("h5", {
  strings: "Welcome to the AI Joke Generator!",
  autoStart: true,
  cursor: "",
  delay: 60
});

function showresults(response) {
    let h5Element = document.querySelector("h5");
    h5Element.innerHTML = `Here's a joke for you! 😂  <br><br>${response.data.answer}`;
    h5Element.style.color = "purple";
}