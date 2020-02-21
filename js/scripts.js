window.onload = function(){
  header();
  events();
}

function events(){
  var menu = document.querySelector("header");
  var togglers = document.querySelectorAll("header nav li svg");

  document.querySelector(".nav-toggler").addEventListener("click", function(e){
    this.classList.toggle("collapsed");
    menu.classList.toggle("active");
    document.body.classList.toggle("scroll-off");
  });

  togglers.forEach(function(toggler){
    toggler.addEventListener("click", function(){
      toggler.closest("li").classList.toggle("active");
    });
  });
}

function header() {

  var menu = document.querySelector("header");
  var showPosition = 100;

  window.addEventListener("scroll", function(e){
    this.scrollY > showPosition ?  menu.classList.add("advanced") : menu.classList.remove("advanced");
  });
}