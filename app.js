window.onload = () => {
    document.body.innerHTML += `
	<div class="nav">
		<img src="assets/icons/icon.png" id="logo">
	</div>
    
    <button class="erry" onclick="bringNav()">
		<p id="dia">Press me to navigate!</p>
		<img src="assets/images/cherry.png" alt="corner mascot" id="jerryCherry">
	</button>
	<div id="erryNav">
		<div class="links" id="navLinks">
			<a href="/">Home</a>
			<a href="comingsoon.html">About Us</a>
			<a href="comingsoon.html">Volunteer</a>
			<a href="comingsoon.html">Start a Chapter</a>
			<a href="comingsoon.html">Tutorials</a>
			<a href="comingsoon.html">Collaboration</a>
			<a href="comingsoon.html">Contact Us</a>
			<a href="comingsoon.html">Gallery</a>
		</div>
	</div>`
    document.getElementById("jerryCherry").src = ["assets/images/cherry.png","assets/images/jerry.png"][Math.random()<0.5?0:1]

    for(a of document.getElementById("navLinks").children) {
        if(a.href == window.location) {
            a.className = "current"
        }
    }

    bringNav()
}
function bringNav() {
    let nav = document.getElementById("erryNav")
    nav.style.top = nav.getBoundingClientRect().top == 0 ? "150%" : "50%"
    document.getElementById("dia").innerText = nav.getBoundingClientRect().top == 0 ? "Press me to navigate!" : "Press me to close!"
}