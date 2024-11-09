onload = () => {
    for (let el of document.getElementsByClassName("imagesSlides")) {
        let leftButton = document.createElement("button")
        let rightButton = document.createElement("button")
        leftButton.innerText = "‹"
        rightButton.innerText = "›"
        leftButton.className = "leftRight lrl"
        rightButton.className = "leftRight lrr"
        let row = document.createElement("div")
        row.className = "slideControls"
        row.appendChild(leftButton)
        row.appendChild(rightButton)
        el.after(row)
    
        leftButton.onclick = () => {
            el.scrollLeft -= el.children[0].getBoundingClientRect().width
        }
        rightButton.onclick = () => {
            el.scrollLeft += el.children[0].getBoundingClientRect().width
        }
    }
}