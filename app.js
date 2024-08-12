window.onload = () => {
    document.body.innerHTML += `<button class="erry" onclick="bringNav()">
		<p id="dia">Press me to navigate!</p>
		<img src="assets/images/cherry.png" alt="corner mascot" id="jerryCherry">
	</button>
	<div id="erryNav">
		<div class="links" id="navLinks">
			<a href="index.html">Home</a>
			<a href="about.html">About Us</a>
			<a href="volunteer.html">Volunteer</a>
			<a href="chapter.html">Start a Chapter</a>
			<a href="tutorials.html">Tutorials</a>
			<a href="collaborate.html">Collaboration</a>
			<a href="contact.html">Contact Us</a>
			<a href="gallery.html">Gallery</a>
		</div>
		<footer>
		<small>Crafts & Laughs is fiscally sponsored by The Hack Foundation (d.b.a. Hack Club), a 501(c)(3) nonprofit (EIN: 81-2908499).</small>
		</footer>
	</div>`
    document.getElementById("jerryCherry").src = ["assets/images/cherry.png","assets/images/jerry.png"][Math.random()<0.5?0:1]

    for(a of document.getElementById("navLinks").children) {
        if((a.href.startsWith(window.location) && window.location.pathname != "/") || (a.href.endsWith("index.html") && window.location.pathname == "/")) {
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