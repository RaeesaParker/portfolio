// ===========================================
// ============= EDUCATION MODAL =============
// ===========================================

let mscDetails = "The main focus of my masters was investing planet formation in the discs surrounding young stars. I used the Lovell Telescope, located in Manchester, UK, in order to observe the young stellar object DG Tau B. Observations were used to determine if the process of planet formation had began around this young star."

let phdDetails = "My PhD focussed primarily on the planet formation process around young stars. Data from the radio telescope ALMA, as well as from smooth particle hydrodynamic simulations were used to conduct this work. Over 1000 observations from ALMA of the discs surrounding young stellar objects were looked. This was done in order to find various structures in the dust and gas surrounding the stars - often an indicator of planet formation. Observations were then compared to SPH simulations in order to determine the nature of the planet formation process. "

let webDetails = "As of 2022, I have been transitioning from astrophysics to web development. I have completed both the CODELancashire and CodeNation web development bootcamps. Both courses have allowed me to gain a solid knowledge base in the key technologies needed to work as a fullstack web developer, including React, Bootstrap, Node, SQL and MongoDB."

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


export {bscItem, mscItem, phdItem, webItem} ;