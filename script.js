 

// preloader functionality start

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("preloader").style.opacity = "0";

        setTimeout(() => {
            document.getElementById("preloader").style.display = "none";
            document.getElementById("website").style.display = "block";
        },800);

    },1500);

});

// preloader functionality end
 
 
 
// multiple skill typing
 
 
 let mySkills=["Frontend Developer.","Wordpress Developer.","Graphic Designer(Canva)."];

skillAnimation=document.querySelector("#profession");
console.log(mySkills);

let idx=0;
let letteridx=1;



function selectCurrentSkill() {
    currentSkill=mySkills[idx];

    skillAnimation.textContent=currentSkill.slice(0,letteridx);
    letteridx++;

    if (letteridx>currentSkill.length) {
        clearInterval(typingTimer);

        setTimeout(() => {
            idx++;

            if (idx>=mySkills.length) {
                idx=0;
            }

            // resetTimer
            letteridx = 1;
            
            typingTimer =setInterval(selectCurrentSkill, 100);

        }, 2000);
    }

}

let typingTimer =setInterval(selectCurrentSkill, 100);



// Project Filter Buttons
const allBtn = document.getElementById("allprojects");
const webBtn = document.getElementById("webDevelopmentProjects");
const graphicBtn = document.getElementById("graphicDesignProjects");

// Select complete project sections
const projectGroups = document.querySelectorAll(".projectGroup");

// Select filter buttons
const buttons = document.querySelectorAll(".projectcategories button");

// Function to filter complete project sections
function filterProjects(category) {

    projectGroups.forEach(group => {

        if (
            category === "all" ||
            group.dataset.group === category
        ) {
            group.style.display = "";
        } else {
            group.style.display = "none";
        }

    });

}

// Function to change active button
function setActiveButton(activeBtn) {

    buttons.forEach(btn => {
        btn.classList.remove("active");
    });

    activeBtn.classList.add("active");

}

// All Projects
allBtn.addEventListener("click", () => {
    filterProjects("all");
    setActiveButton(allBtn);
});

// Web Development Projects
webBtn.addEventListener("click", () => {
    filterProjects("web");
    setActiveButton(webBtn);
});

// Graphic Design Projects
graphicBtn.addEventListener("click", () => {
    filterProjects("graphics");
    setActiveButton(graphicBtn);
});

// Show all projects when the page loads
filterProjects("all");
allBtn.classList.add("active");
