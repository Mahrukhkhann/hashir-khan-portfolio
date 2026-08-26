window.addEventListener("scroll",()=>{

document.querySelector("header")
.classList.toggle("scrolled",window.scrollY>40);

});
const reveal=document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{

reveal.forEach(item=>{

const top=item.getBoundingClientRect().top;

if(top<window.innerHeight-100){

item.classList.add("active");

}

});

});
// Scroll Progress Bar
const progressBar = document.querySelector(".progress-bar");

window.addEventListener("scroll", () => {

    const pageHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    const scrollPosition = window.scrollY;

    const progress = (scrollPosition / pageHeight) * 100;

    progressBar.style.width = progress + "%";

});
// Animated Statistics Counter
const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;

            const target = Number(counter.dataset.target);

            let current = 0;

            const speed = Math.ceil(target / 60);

            const timer = setInterval(() => {

                current += speed;

                if (current >= target) {

                    current = target;

                    clearInterval(timer);

                }

                counter.textContent = current;

            }, 30);

            observer.unobserve(counter);

        }

    });

}, {

    threshold: 0.5

});

counters.forEach(counter => {

    observer.observe(counter);

});


// 
const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", () => {

    const scrollPosition = window.pageYOffset;


    sections.forEach(section => {


        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.offsetHeight;

        const sectionId = section.getAttribute("id");


        if(
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ){


            navLinks.forEach(link => {

                link.classList.remove("active");

            });


            document
            .querySelector('.nav-links a[href="#' + sectionId + '"]')
            .classList.add("active");


        }


    });


});
// Back To Top Button 
const topBtn = document.querySelector(".top-btn");

window.addEventListener("scroll",()=>{
    if(window.scrollY > 500){
        topBtn.style.display="flex";
    }
    else{
        topBtn.style.display="none";
    }
});

topBtn.addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});

// 
const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-links");
menuBtn.addEventListener("click",()=>{
    navMenu.classList.toggle("active");
});
                           /* Project Image Lightbox*/

// Select all project images
const projectImages = document.querySelectorAll(".project-card img");

// Select lightbox elements
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox-image");
const closeLightbox = document.querySelector(".close-lightbox");

// Open lightbox
projectImages.forEach(image => {

    image.addEventListener("click", () => {

        lightbox.style.display = "flex";

        lightboxImage.src = image.src;

        lightboxImage.alt = image.alt;

    });

});

// Close using X button
closeLightbox.addEventListener("click", () => {

    lightbox.style.display = "none";

});

// Close when clicking outside the image
lightbox.addEventListener("click", (event) => {

    if (event.target === lightbox) {

        lightbox.style.display = "none";

    }

});
/* Project Filtering System */

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Remove active class from all buttons
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Highlight clicked button
        button.classList.add("active");

        // Get selected category
        const filter = button.dataset.filter;

        // Show or hide projects
        projectCards.forEach(project => {

            const category = project.dataset.category;

            if (filter === "all" || category === filter) {

                project.style.display = "block";

            } else {

                project.style.display = "none";

            }

        });

    });

});
/* ===============================
   Dark / Light Mode Toggle
================================== */

const themeButton = document.querySelector(".theme-toggle");

const body = document.body;


// Load saved theme

const savedTheme = localStorage.getItem("theme");


if(savedTheme === "dark"){

    body.classList.add("dark-mode");

    themeButton.textContent = "☀️";

}


// Button Click Event

themeButton.addEventListener("click", () => {


    body.classList.toggle("dark-mode");


    if(body.classList.contains("dark-mode")){


        localStorage.setItem("theme","dark");

        themeButton.textContent = "☀️";


    }

    else{


        localStorage.setItem("theme","light");

        themeButton.textContent = "🌙";


    }


});
// Animated Text
new Typed("#typed-text", {

    strings: [
        "Civil Engineer",
        "Construction Planner",
        "Site Supervisor",
        "Project Manager",
        "Quality Control Engineer"
    ],

    typeSpeed: 60,
    backSpeed: 35,
    backDelay: 1500,
    loop: true

});
// Loading Screen

window.addEventListener("load",()=>{
    document.querySelector(".loader").style.display="none";

});
// timeline
const timelineItems = document.querySelectorAll(".timeline-item");
const timelineObserver = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{
    threshold:0.3
});
timelineItems.forEach(item=>{
    timelineObserver.observe(item);

});