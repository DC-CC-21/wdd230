const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
let chaptersArray = getChapterList() ||  []

function getChapterList(){
    return JSON.parse(localStorage.getItem("chapters"))
}

chaptersArray.forEach(chapter => {
    displayList(chapter);
})

function setChapterList(){
    localStorage.setItem("chapters", JSON.stringify(chaptersArray));
}
function deleteChapter(chapter){
    chapter = chapter.slice(0, chapter.length-1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    localStorage.setItem("chapters", JSON.stringify(chaptersArray));

}

// The button is pressed
button.addEventListener('click', addChapter);


input.addEventListener("keypress", (e) => {
    // Check if the enter key was pressed
    if(e.key.toLowerCase() == "enter"){
        
        // Run callback addChapter function
        addChapter();
    }
});

// The function for adding a chapter
function addChapter(){
     // If the input is not empty...
    if (input.value !== '') {
        displayList(input.value)

        chaptersArray.push(input.value);
        setChapterList();
        // Reset the input box to empty
        input.value = '';
    } 
    
    // Alert the user and focus the input if the input has no value
    else {
        alert("Input has no value.");
    }
    input.focus();
}

function displayList(item){
   // Create a list
   const li = document.createElement('li');
        
   // Create a delete button
   const deleteButton = document.createElement('button');
   deleteButton.setAttribute("aria-label", `Remove ${item}`);

   // Assigns the input value to a list element
   li.innerHTML = item;
   // Creates the delete icon
   deleteButton.textContent = "❌";
   // Adds the delete button to the list item
   li.append(deleteButton);
   // Adds the list to the HTML list (ul id="list")
   list.append(li);

   // When the delete button is pressed
   deleteButton.addEventListener('click', () => {
       // Remove the item from the list
       li.remove();
       deleteChapter(li.textContent);
       input.focus();
   });
}