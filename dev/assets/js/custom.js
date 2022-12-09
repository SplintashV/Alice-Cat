window.onscroll = function () {
    fixedFunction()

};

var navbar = document.getElementById("navbar"); 

var sticky = navbar.offsetTop; 



function fixedFunction() {
    if (window.pageYOffset > sticky) {
        navbar.classList.add("fixed");
        navbar.classList.add("sticky-style");
    } else {
        navbar.classList.remove("fixed");
        navbar.classList.remove("sticky-style");
       
    }
}

 const animItems = document.querySelectorAll('.anim-items');
 
 if (animItems.length > 0) {
     window.addEventListener('scroll', animOnScroll);
     function animOnScroll() {
         for (let index = 0; index < animItems.length; index++) {
             const animItem =animItems[index];
             const animItemHeight = animItem.offsetHeight;
             const animItemOffset = offset(animItem).top;
             const animStart = 4;
 
             let animItemPoint = window.innerHeight - animItemHeight / animStart;
             if ( animItemHeight > window.innerHeight) {
                 animItemPoint = window.innerHeight - window.innerHeight / animStart;
             }
 
             if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                 animItem.classList.add('active');
                 
             } else {
                 animItem.classList.remove('active');
             }
         }
         
     }
 
     function offset(el) {
         const rect = el.getBoundingClientRect(),
             scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
             scrollTop = window.pageYOffset || document.documentElement.scrollTop;
         return { top: rect.top + scrollTop, left: rect.left + scrollLeft }    
     }
 }

// Тоже самое .. но иначе //
// function reveal() {
//     var reveals = document.querySelectorAll(".reveal");
//   
//     for (var i = 0; i < reveals.length; i++) {
//       var windowHeight = window.innerHeight;
//       var elementTop = reveals[i].getBoundingClientRect().top;
//       var elementVisible = 120;
//   
//       if (elementTop < windowHeight - elementVisible) {
//         reveals[i].classList.add("active");
//       } else {
//         reveals[i].classList.remove("active");
//       }
//     }
//   }
//   
//   window.addEventListener("scroll", reveal);