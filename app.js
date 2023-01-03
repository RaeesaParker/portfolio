import {bscItem , mscItem, phdItem, webItem} from "./modules/education.js"


// Create element to hold body
let body = document.getElementById("sec-aboutMe");

// Create an div element for the modal 
let modalDiv = document.createElement("div");
modalDiv.setAttribute("class", "modal");
modalDiv.setAttribute("id", "myModal");

// Create a div to a modal content 
let modalContentDiv = document.createElement("div");
modalContentDiv.setAttribute("class", "modal-content");

// Create the close button
let closeButton = document.createElement("p");
closeButton.setAttribute("class", "close");
closeButton.textContent = `X`;

// Create the header title
let headerName = document.createElement("h3");
headerName.setAttribute("id", "modal-header-name");

// Create the header date 
let headerDate = document.createElement("h4");
headerDate.setAttribute("id", "modal-header-date");

// Create the header date 
let headerPlace = document.createElement("h5")
headerPlace.setAttribute("id", "modal-header-place")

// Create the content
let contentPara = document.createElement("p")
contentPara.setAttribute("id", "modal-content-para")


// Create button for masters and phd
let button = document.createElement("button")
button.setAttribute("class", "button-contact")
button.setAttribute("id", "button-thesis")
// Create the anchot tag to go inside button
let anchor = document.createElement("a")
anchor.setAttribute("id", "anchor-thesis")
button.appendChild(anchor)


// Append componants to modal content
modalContentDiv.appendChild(closeButton) ;
modalContentDiv.appendChild(headerName) ;
modalContentDiv.appendChild(headerDate) ;
modalContentDiv.appendChild(headerPlace) ;
modalContentDiv.appendChild(contentPara) ; 

// Append modal to body => Append modal content to modal
modalDiv.appendChild(modalContentDiv);
body.appendChild(modalDiv);


// Get the education divs that opens the modal
let educationDivs = document.getElementsByClassName("education-modal");


// Loop through all of the education Divs to add event listeners
for (let counter = 0 ; counter < educationDivs.length ; counter++){
	// When the user clicks on the div, open the modal
	educationDivs[counter].addEventListener("click", createModal, false)
	educationDivs[counter].counterValue = counter ;
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalDiv) {
    modalDiv.style.display = "none";
    modalContentDiv.removeChild(button) ;
  }
} 

// When the user clicks on <span> (x), close the modal
closeButton.onclick = function() {
	modalDiv.style.display = "none";
	modalContentDiv.removeChild(button) ;
}


// Function to create modal 
function createModal(event){

	// Counter used to check which item we need
	let counter =  event.currentTarget.counterValue

	// Inner text value of the button clicked
	let buttonClicked = educationDivs[counter].children[0].innerText

	// Create variable for the button clicked
	let educationClicked = ""
	
	if (buttonClicked == "2013"){
		educationClicked = bscItem 
	}
	else if (buttonClicked == "2017"){
		educationClicked = mscItem
		anchor.href = "https://clok.uclan.ac.uk/23091/1/23091%20Parker%20Raeesa%20Final%20e-Thesis%20%28Master%20Copy%29.pdf"
		anchor.innerText = "Thesis"
		anchor.target="_blank"
		modalContentDiv.appendChild(button);
	}
	else if (buttonClicked == "2018"){
		educationClicked = phdItem
		anchor.href = "https://clok.uclan.ac.uk/40641/9/40641%20stac152%20published.pdf"
		anchor.innerText = "Published Paper"
		anchor.target="_blank"
		modalContentDiv.appendChild(button); 
	}
	else if (buttonClicked == "2022"){
		educationClicked = webItem
		anchor.href = "https://github.com/RaeesaParker"
		anchor.innerText = "GitHub"
		anchor.target="_blank"
		modalContentDiv.appendChild(button); 
	}

	// Set contents of Modal
	headerName.innerText = educationClicked.heading
	headerDate.innerText = educationClicked.date
	headerPlace.innerText = educationClicked.place
	contentPara.innerText = educationClicked.details
		
	// Set the display style to block 
	modalDiv.style.display = "block";
}


// CONTACT FORM

window.onbeforeunload = () => {
  for(const form of document.getElementsByTagName('form')) {
    form.reset();
  }
}