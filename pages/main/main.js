window.onload = () => {
    [...document.querySelectorAll('input')].forEach((input) => input.checked = false);
};

/* Update start building anchor href location based on radioState */
function radioOnclick(self) {
    const radioState = self.getAttribute('id')
    let startBuilding = document.getElementById("start-building")

    if (radioState == "marker") {
        startBuilding.href = "https://raw.githack.com/Harrypotter776/example/main/pages/marker/index.html"
     else {
        // Display error message
    }
}

function anchorOnclick(self) {
    const href = self.getAttribute('href')
    if (!href) {
        const error = document.getElementById("error")
        error.style.visibility = "visible"
    }
}

