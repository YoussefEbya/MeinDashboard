

const darkModeAnchor = document.getElementById("darkModeAnchor");
const off = darkModeAnchor.querySelector(".state-off");
const on = darkModeAnchor.querySelector(".state-on");

function HandleDark() {
    const isOff = off.style.display !== "none";
    
    if (isOff) {
        off.style.display = "none";
        on.style.display = "block";
        document.body.classList.add("dark")
    }
    
    else {
        off.style.display = "block";
        on.style.display = "none";
        document.body.classList.remove("dark")
    }
}

darkModeAnchor.addEventListener("click", HandleDark);





const listIcon = document.getElementById("listIcon");

let collapsed = document.querySelector(".mySide").classList.contains("collapsed");

function CollapseSide() {

    document.querySelector(".mySide").classList.toggle("collapsed");
    document.querySelector(".myLayout").classList.toggle("collapsed");

    collapsed = (collapsed) ? false : true;
}

listIcon.addEventListener("click", CollapseSide);


let maxWidth = 920;

window.addEventListener("resize", () => {
    if(window.innerWidth < maxWidth && !collapsed) {
        CollapseSide();
    }

    if(window.innerWidth > maxWidth && collapsed) {
        CollapseSide();
    }
})

window.addEventListener("load", () => {
    if (window.innerWidth < maxWidth) {
        CollapseSide();
    }
});