const hamburger = document.querySelector(".hamburger"),
navContainer = document.querySelector(".navbar"),
navLink = document.querySelectorAll(".navbar a"),
html = document.querySelector("html"),
header = document.querySelector(".header");

gsap.registerPlugin(ScrollTrigger);
/************************************ Hamburger logic ***********************************************/
//add active
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navContainer.classList.toggle("active-nav");
  html.classList.toggle("html-scroll"); // prevent scrolling
})

//remove active
navLink.forEach(e => {
  e.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navContainer.classList.remove("active-nav");
    html.classList.remove("html-scroll"); // remove prevent scrolling or user can scroll
  })
});

/************************************ scroll logic ***********************************************/
var specificPixel = 80;

// Function to be called when the user scrolls to the specific pixel
function handleScroll() {
  var scrollPosition = window.scrollY || window.pageYOffset;

  if (scrollPosition >= specificPixel) {
    header.classList.add("fixed-header");
  } else {
    header.classList.remove("fixed-header");
  }
}

// Attach the 'handleScroll' function to the 'onscroll' event
window.onscroll = handleScroll;

// Scroll Trigger for Banner Section
gsap.from(".banner-right", {
  opacity: 0,
  x: 200,
  duration: 1.5,
  scrollTrigger: {
    trigger: ".banner-container",
    start: "top 80%", // adjust as needed
    end: "bottom top",
    toggleActions: "play none none reverse",
  },
});

gsap.from(".banner-left", {
  opacity: 0,
  x: -200,
  duration: 1.5,
  scrollTrigger: {
    trigger: ".banner-container",
    start: "top 80%", // adjust as needed
    end: "bottom top",
    toggleActions: "play none none reverse",
  },
});

// Scroll Trigger for About Section
gsap.from(".heading, .info", {
  opacity: 0,
  y: 50,
  stagger: 0.2,
  duration: 1,
  scrollTrigger: {
    trigger: ".about-section",
    start: "top 80%", // adjust as needed
    end: "bottom top",
    toggleActions: "play none none reverse",
  },
});

// Function to animate skills on scroll
function animateSkills() {
  // Define the skill elements
  const skills = document.querySelectorAll('.skills-container li');

  // Loop through each skill and set up the animation
  skills.forEach((skill, index) => {
    gsap.from(skill, {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.1 * index,
      scrollTrigger: {
        trigger: skill,
        start: 'top 80%', // Adjust the start trigger as needed
        end: '+=500', // Adjust the end trigger as needed
        toggleActions: 'play none none reverse',
      },
    });
  });
}

// Function to animate portfolio items on scroll
function animatePortfolio() {
  // Define the portfolio item elements
  const portfolioItems = document.querySelectorAll('.portfolio-list li');

  // Loop through each portfolio item and set up the animation
  portfolioItems.forEach((item, index) => {
    gsap.from(item, {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.1 * index,
      scrollTrigger: {
        trigger: item,
        start: 'top 80%', // Adjust the start trigger as needed
        end: '+=500', // Adjust the end trigger as needed
        toggleActions: 'play none none reverse',
      },
    });
  });
}

// Function to animate experience section on scroll
function animateExperience() {
  // Define the experience item elements
  const experienceItems = document.querySelectorAll('.experience-inner');

  // Loop through each experience item and set up the animation
  experienceItems.forEach((item, index) => {
    gsap.from(item, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      delay: 0.1 * index,
      scrollTrigger: {
        trigger: item,
        start: 'top 80%', // Adjust the start trigger as needed
        end: '+=400', // Adjust the end trigger as needed
        toggleActions: 'play none none reverse',
      },
    });
  });
}

// Call the function to initialize the animations
animateSkills();

// Call the function to initialize the animations
animatePortfolio();

// Call the function to initialize the animations for the experience section
animateExperience();
