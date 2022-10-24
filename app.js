// ===========================================
// ============= EDUCATION MODAL =============
// ===========================================

let mscDetails = "The main focus of my masters was investing planet formation in the discs surrounding young stars. I used the Lovell Telescope, located in Manchester, UK, in order to observe the young stellar object DG Tau B. Observations were used to determine if the process of planet formation had began around this young star."

let phdDetails = "My PhD focussed primarily on the planet formation process around young stars. Data from the radio telescope ALMA, as well as from smooth particle hydrodynamic simulations were used to conduct this work. Over 1000 observations from ALMA of the discs surrounding young stellar objects were looked. This was done in order to find various structures in the dust and gas surrounding the stars - often an indicator of planet formation. Observations were then compared to SPH simulations in order to determine the nature of the planet formation process. "

let webDetails = "As of 2022, I have been taking part in the CODELancashire Bootcamp. The course aims to increase knowledge and skills in web development, as well as python. My goal is to work as a web developer upon the courses completion."

// Create a class for different educations
class EducationItem {
	constructor(heading, date, place, details){
		this.heading = heading;
		this.date = date;
		this.place = place;
		this.details = details;
	}
}

let bscItem = new EducationItem("BSc. Astrophysics", "2013-2016", "University of Central Lancashire", "During this course I studied a range of topics covering both mathematics and physics. I attained a 2:1 degree.")

let mscItem = new EducationItem("MSc. Astrophysics", "2017-2018", "University of Central Lancashire", mscDetails)

let phdItem = new EducationItem("PhD. Astrophysics", "2018-2022", "University of Central Lancashire", phdDetails)

let webItem = new EducationItem("Web Development", "2022 - Present", " ", webDetails)


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
for (counter = 0 ; counter < educationDivs.length ; counter++){
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






