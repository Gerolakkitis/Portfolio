'use strict';


const menuOpen=document.querySelector("#menu-open");
const menuClose=document.querySelector("#menu-close");
const mobileMenu=document.querySelector('#mobile__menu');
const movingLineSm=document.querySelector('#moving--element--01');
const movingLine12=document.querySelector('#moving--element--02');
const movingLine16=document.querySelector('#moving--element--03');
const scrollIcon=document.querySelector('#scroll--icon');
const smallBg=document.querySelector('#small-bg-svg');
const largeBg=document.querySelector('#large-bg-svg');
const navHome=document.querySelector('#navHome');
const navProjects=document.querySelector('#navProjects');
const navServices=document.querySelector('#navServices');
const navAbout=document.querySelector('#navAbout');
const navContact=document.querySelector('#navContact');
const phone = document.getElementById('phone');


//open and close nav menu when menu icon is clicked
menuOpen.addEventListener("click", function(){
    
    menuOpen.classList.toggle('hidden');
    menuClose.classList.toggle('hidden');  
    mobileMenu.style.top=0;
});
menuClose.addEventListener("click", function(){
    menuOpen.classList.toggle('hidden');
    menuClose.classList.toggle('hidden');
    mobileMenu.style.top=Number(-500)+'%';
});


//close nav menu when link is clicked
navHome.addEventListener("click", function(){
    closeMenuOnNavClick();
})
navProjects.addEventListener("click", function(){
    closeMenuOnNavClick();
})
navServices.addEventListener("click", function(){
    closeMenuOnNavClick();
})
navAbout.addEventListener("click", function(){
    closeMenuOnNavClick();
})
navContact.addEventListener("click", function(){
    closeMenuOnNavClick();
})
const closeMenuOnNavClick= function(){
    menuOpen.classList.remove('hidden');
    menuClose.classList.add('hidden');
    mobileMenu.style.top=Number(-500)+'%';
}

//Resize moving scroll on top background based on screen size
function checkScreenBg(){
    if(window.innerWidth < 1024 ) {
        if (movingLineSm.classList.contains('hidden')){
            movingLineSm.classList.remove('hidden');
        if (!movingLineSm.classList.contains("hidden"))
         {
            movingLine12.classList.add("hidden");
         }
}
    } else{
        if (movingLine12.classList.contains('hidden')){
            movingLine12.classList.remove('hidden');
            if (!movingLineSm.classList.contains("hidden"))
             {
                movingLineSm.classList.add("hidden");
             }
}

    }
}
checkScreenBg();
//Recheck when window gets resized.
window.addEventListener('resize', checkScreenBg);


//add dashes automatically on phone 123-456-7890
phone.addEventListener("keydown", (e) => {
    if(e.key === "Backspace" || e.key === "Delete") return;
    if(e.target.value.length === 3) {
        phone.value = phone.value + "-";
    }
    if(e.target.value.length === 7) 
        phone.value = phone.value + "-";
    }
)





//scroll on top background
// movingLine.addEventListener("click", function(){
//     console.log('hello there');
// })



// Adds and removes screen background depending on screen width.
// function checkScreenBg () {
//     if(window.innerWidth > 1024) {
//         smallBg.classList.add('hidden');
//         largeBg.classList.remove('hidden');
//     } else {
//         largeBg.classList.add('hidden');
//         smallBg.classList.remove('hidden');
//     }
// }
// checkScreenBg();
// //Recheck when window gets resized.
// window.addEventListener('resize', checkScreenBg);






    // if(e.target.value.length === 14) {
    //     phone.value = phone.value + "-";
    // }