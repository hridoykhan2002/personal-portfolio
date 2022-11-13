// navbar 
// selecting ele
const togBtn = document.querySelector('.tog-btn');
const nabvar = document.querySelector('.nav');
const navlink = document.querySelector('.link');
const navLogo = document.querySelector('.logo h3');
// add event listener
togBtn.addEventListener('click',() =>{
    navlink.classList.toggle('show-nav');
});
navlink.addEventListener('click',() =>{
    navlink.classList.toggle('show-nav');
});

// navlinks
const homeLink = document.querySelector('.homeLink')
const aboutLink = document.querySelector('.aboutLink');
const skillLink = document.querySelector('.skillLink');
const serviceLink = document.querySelector('.serviceLink');
const contactLink = document.querySelector('.contactLink');
// function
const setActiveNav = () =>{
    // selecting ele
    const topBtn = document.querySelector('.top-btn');
    let pageheight = window.pageYOffset;
    if(pageheight >50){
        nabvar.style.boxShadow = "3px 3px 5px rgb(168, 167, 167), -3px -3px 5px rgb(168, 167, 167)"
    }else{
        nabvar.style.boxShadow = "";
    }
    if(pageheight >500){
        homeLink.classList.remove('nav-active');
        aboutLink.classList.add('nav-active');
        topBtn.style.display =  "block";
    }else{
        homeLink.classList.add('nav-active');
        aboutLink.classList.remove('nav-active');
        skillLink.classList.remove('nav-active');
        topBtn.style.display =  "none";
    }
    if(pageheight >1190){
        skillLink.classList.add('nav-active');
        homeLink.classList.remove('nav-active');
        aboutLink.classList.remove('nav-active');
    }else{
        skillLink.classList.remove('nav-active');
    }
    if(pageheight >2500){
        serviceLink.classList.add('nav-active')
        skillLink.classList.remove('nav-active');
        homeLink.classList.remove('nav-active');
        aboutLink.classList.remove('nav-active');
    }else{
        serviceLink.classList.remove('nav-active')
    };
    if(pageheight >3300){
        contactLink.classList.add('nav-active');
        serviceLink.classList.remove('nav-active')
        skillLink.classList.remove('nav-active');
        homeLink.classList.remove('nav-active');
        aboutLink.classList.remove('nav-active');
    }else{
        contactLink.classList.remove('nav-active');
    };
    if(pageheight >3405){
        topBtn.style.border = "1px solid white";
    }else{
        topBtn.style.border = "none"
    }
};

// reload page
const loadingVdo = () =>{
    // selecting ele
    const loadVdo = document.querySelector('.load-vdo');
    loadVdo.style.display = "none";
    loadVdo.style.zIndex = "-99999";
};
setTimeout(loadingVdo,1500);

// window event 
window.addEventListener('scroll',() =>{
    setActiveNav();
})
// qualifications
// selecting ele 
const quaBtns = document.querySelectorAll('.qua-btn');
const mainQuaBox = document.querySelectorAll('.qua-main');

quaBtns[0].addEventListener('click',() =>{
    mainQuaBox[0].classList.add('qua-active');
    mainQuaBox[1].classList.remove('qua-active');
    quaBtns[0].classList.add('qua-btn-active');
    quaBtns[1].classList.remove('qua-btn-active');
});
quaBtns[1].addEventListener('click',() =>{
    mainQuaBox[0].classList.remove('qua-active');
    mainQuaBox[1].classList.add('qua-active');
    quaBtns[1].classList.add('qua-btn-active');
    quaBtns[0].classList.remove('qua-btn-active');
});

// services
// selecting ele
const servicesBtn = document.querySelectorAll('.a');
const servicesModal = document.querySelectorAll('.servie-modalPer')
const servicesCloseBtn = document.querySelectorAll('.close-btn')

// add event listener
const openModal = (value) =>{
    servicesModal[value].style.opacity = "1";
    servicesModal[value].style.visibility = "visible";
}
const closeModal = (value) =>{
    servicesModal[value].style.opacity = "0";
    servicesModal[value].style.visibility = "hidden";
}
servicesBtn[0].addEventListener("click",() =>{
    openModal(0);
});
servicesBtn[1].addEventListener("click",() =>{
    openModal(1);
});
servicesBtn[2].addEventListener("click",() =>{
    openModal(2);
});
servicesCloseBtn.forEach((btn) =>{
    btn.addEventListener('click',(e) =>{
        const btnText = e.target.dataset.service;
        if(btnText == 1){
            closeModal(0);
        };
        if(btnText == 2){
            closeModal(1);
        };
        if(btnText == 3){
            closeModal(2);
        }
    })
})
// dark btn 
// selecting ele
const pageQua = document.querySelector('#qualifications');
const pageHero = document.querySelector('#home');
const pageNav = document.querySelector('.nav');
const pageBanner = document.querySelector('#banner')
const pageSkill = document.querySelector('#skill');
const pageService = document.querySelector('#service');
const pageAbout = document.querySelector('#about');
const pageContact = document.querySelector('#contact');
const darkBtn = document.querySelector('.mode-btn');
const modalBox = document.querySelectorAll('.service-modal');
// add event listener
darkBtn.addEventListener('click',() =>{
    pageQua.classList.toggle('dark-active');
    pageHero.classList.toggle('dark-active');
    pageBanner.classList.toggle('dark-active');
    pageNav.classList.toggle('dark-active');
    pageSkill.classList.toggle('dark-active');
    pageService.classList.toggle('dark-active');
    pageAbout.classList.toggle('dark-active');
    pageContact.classList.toggle('dark-active');
    navlink.classList.toggle('dark-active');
    darkBtn.classList.toggle('dark-to-white');
    modalBox.forEach((modal) =>{
        modal.classList.toggle('dark-active')
    });
});
// contact
// selecting ele
const contactForm = document.querySelector('.contact-form');
const nameInput = document.querySelector('.c-name');
const emailInput = document.querySelector('.c-email');
const projectInput = document.querySelector('.c-project');
const messageInput = document.querySelector('.c-message');
contactForm.addEventListener('submit',(e) =>{
    e.preventDefault();
    alert("Message Sent")
    nameInput.value = "";
    emailInput.value = "";
    projectInput.value = "";
    messageInput.value = "";
});
