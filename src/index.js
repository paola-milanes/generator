function displaypoem(response){
    
       new Typewriter("#poem", {
         strings: response.data.answer,
         autoStart: true,
         delay: 1,
         cursor: "",
       });
  
}
function addpoem(event){
  event.preventDefault();
    let searchbar = document.querySelector("#searchbar");
    
     let prompt = `generate a spanish poem about ${searchbar.value}`;
     console.log(prompt)
     let context = "you are a romantic poem expert.your misson is to generation a 6 line poem in basic HTML. seperate each line with a <br/>, make sure to follow the user instructions below. do not use a title";
     let apiKey = "9afc5146bea2t731f3ee989f0a290f4o";
     let url =
       `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    
    axios.get(url).then(displaypoem)

    let poem = document.querySelector("#poem")
    poem.innerHTML = `Generating a spanish poem about ${searchbar.value}`;


}


let poemform = document.querySelector("#poem-generator");
poemform.addEventListener("submit", addpoem)

function generatePoem(event){
    event.preventDefault
    let prompt = ""
    let context=""
    let apiKey="9afc5146bea2t731f3ee989f0a290f4o";
    let url =
      "https://api.shecodes.io/ai/v1/generate?prompt={prompt}&context={context}&key={apiKey}";
}
