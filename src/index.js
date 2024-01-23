function addpoem(event){
  event.preventDefault();
//   let poem = document.querySelector("#poem")
  new Typewriter("#poem", {
    strings:"Verde que te quiero verde. Verde viento. Verdes ramas.",
    autoStart: true,
    delay: 1,
    cursor:"",
  });

}

let poemform = document.querySelector("#poem-generator");
poemform.addEventListener("submit", addpoem)