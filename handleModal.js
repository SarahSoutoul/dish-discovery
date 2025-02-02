import { modal } from "./elements.js";

export function handleClickOpenModal(e) {
    console.log(e.currentTarget.parentElement);
    
    const recipeElement = e.currentTarget.parentElement
    
    //Retrieve the recipe that has been clicked on using dataset
    ////Ingredients and instructions
    const ingredients = recipeElement.dataset.ingredients;
    const instructions = recipeElement.dataset.instructions;
    
    const transformArray = instructions.split(".");
    
    const modalHtml = `
    <span class="close">&times;</span>
    <h2>Ingredients</h2>
    <p>Ingredients: ${ingredients}</p>
    <h2>Instructions</h2>
    <ul>
         ${transformArray.map(instruction => `<li>${instruction.trim().replace(/^,/, '')}</li>`).join('')}
     </ul>
    `;
    
    // Insert the generated HTML into the modal's content area
    modal.querySelector(".modal-content").innerHTML = modalHtml;
    
    //open the model
    modal.style.display = "block";
    
    // Re-attach the close event listener
    const newCloseButton = modal.querySelector(".close");
    newCloseButton.addEventListener('click', handleCloseModal);
    
    }
    
    //x to close the modal
    export function handleCloseModal() {
        //close the model
        console.log("I got clicked");
        modal.style.display = "none";
    }

    //format ingredients and remove last list item
    //write a good read me
    //

    