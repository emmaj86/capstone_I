//initiate items to zero
//query selector for buttons
let btns = document.querySelectorAll("button");

//for each button
for (i of btns) {
  //event listener if clicked
  i.addEventListener("click", function () {
    //get parent id
    let id = this.parentNode.id;
    // Add item to the "Save for later" folder
    sessionStorage.setItem(id, document.getElementById(id).innerHTML);
    // Display an alert to show how many items are in the "Saved folder"
    alert(`You have ${sessionStorage.length} items in your saved folder.`);
  });
}

//function to toggle thumb up/down
function likeFunction(x) {
  x.classList.toggle("fa-thumbs-down");
}

//function for onclick submit
function submit() {
  let commentBox = document.getElementById("commentForm").value;
  //create li
  let li = document.createElement("li");
  let text = document.createTextNode(commentBox);
  //add comment box text to li
  li.appendChild(text);
  document.getElementById("commentList").appendChild(li);
  //reset comment box
  document.getElementById("commentForm").value = "";
}

// JavaScript to display items in the "Save for later" folder
for (let i = 0; i < sessionStorage.length; i++) {
  let itemName = sessionStorage.key(i); //item name
  let itemValue = sessionStorage.getItem(itemName); //item value
  document.getElementById("saved-items").innerHTML +=
    "<div>" + itemName + ": " + itemValue + "</div>";
}
