function changeNavbarColor(hover) {
    var navbar = document.querySelector('nav');
    if (hover) {
        navbar.classList.add('navbar-yellow');
    } else {
        navbar.classList.remove('navbar-yellow');
    }
}

window.addEventListener('scroll', function() {
    var navbar = document.querySelector('nav');
    if (window.pageYOffset >= 200) {
        navbar.classList.add('navbar-yellow');
    } else {
        navbar.classList.remove('navbar-yellow');
    }
});

var navbar = document.querySelector('nav');
var dropdownLink = document.querySelector('.dropdown-link');

dropdownLink.addEventListener('mouseover', function() {
  navbar.classList.add('navbar-yellow');
});

dropdownLink.addEventListener('mouseout', function() {
  if (!navbar.classList.contains('dropdown-hover')) {
    navbar.classList.remove('navbar-yellow');
  }
});

navbar.addEventListener('mouseover', function() {
  if (dropdownLink.classList.contains('dropdown-hover')) {
    navbar.classList.add('navbar-yellow');
  }
});

navbar.addEventListener('mouseout', function() {
  if (!dropdownLink.classList.contains('dropdown-hover')) {
    navbar.classList.remove('navbar-yellow');
  }
});

/*------loading animation--------------*/

gsap.fromTo(
  ".loading-page",
  { opacity: 1 },
  {
    opacity: 0,
    display: "none",
    duration: 1.5,
    delay: 3.0,
  }
);

gsap.fromTo(
  ".logo-name",
  {
    y: 60,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 2.5,
    delay: 0.5,
  }
);

gsap.fromTo(
  ".logo-name2",
  {
    y: 60,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 2.9,
    delay: 0.9,
  }
);

