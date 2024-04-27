function displayRecipe(response){
   
  new Typewriter('#recipe', {
  strings:response.data.answer,
  autoStart: true,
  delay:1,
  cursor:"",
});    
}


function generateRecipe(event){
    event.preventDefault();
let userInput=document.querySelector("#user-input");
    let apiKey="bfoaa9tbb9f25fdb436074c0df5a4b84";
    let prompt=`User input: Generate a recipe suitable for a carnivore diet using ${userInput.value}`;
    let context="You are a cook who likes to create recipes for a carnivore diet. Your mission is to provide full recipes in basic HTML format with a list of ingredients needed and steps to make the food. Make sure to use the user input. No additional text above the title.";
    let apiUrl=`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

let recipeElement= document.querySelector("#recipe");
recipeElement.classList.remove("hidden");
recipeElement.innerHTML=`<div class="blink">Generating recipe for ${userInput.value}...</div>`;

axios.get(apiUrl).then(displayRecipe);
}



let recipeFormElement= document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);