import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Scrollbar from 'smooth-scrollbar';
import { bootstrap } from 'bootstrap';
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

import './scss/styles.scss';





let bodyScrollBar;

function initSmoothScrollBar(){

  bodyScrollBar = Scrollbar.init(document.querySelector('#viewport'), {damping:0.1});
     bodyScrollBar.track.xAxis.element.remove();
 
 
     // Tell ScrollTrigger to use these proxy getter/setter methods for the "body" element: 
 ScrollTrigger.scrollerProxy(document.body, {
     scrollTop(value) {
       if (arguments.length) {
         bodyScrollBar.scrollTop = value; // setter
       }
       return bodyScrollBar.scrollTop;    // getter
     }
   });
   
   // when the smooth scroller updates, tell ScrollTrigger to update() too: 
   bodyScrollBar.addListener(ScrollTrigger.update);
     
 }
 function initScrollto(){
     gsap.utils.toArray('.fixed-nav a').forEach(link => {
 
         const target =  link.getAttribute('href');
 
         link.addEventListener('click', (e) => {
             e.preventDefault();
             bodyScrollBar.scrollIntoView(document.querySelector(target),{damping: 0.1});
         });
 
     });
 }
  
 let colours = ["#01BDC5", "#38B6E3", "#339FDD", "#5FE48F", "#27CDAF", "#7AA5EE", "#7090FF", "#5486FF", "#8064D8" , "#9BBBDF", "#FFFFFF"];
 const navigation = document.querySelector('.p-nav');
 const mbNav = document.querySelector('.p-mb-nav');
 const navItem = document.querySelectorAll(".fixed-nav");

 function sample(list) {
  return function() {
    return list[Math.floor(Math.random() * list.length)];
  }  
}

function random(min, max) {
  if (max == null) { max = min; min = 0; }
  return function() {    
    return Math.random() * (max - min) + min;
  }
}
function kvAnimation(){
  const kvTitle = document.querySelector('.c-keyvisual__title');

  const tl = gsap.timeline({});

   tl.to(".c-keyvisual__img", { autoAlpha: 1 });
 
    tl.from(".js-squares", {
        duration: 2,
        rotation: 180,
        transformOrigin: "center center",
        opacity: 0,
        scale: 0,
        y: "random(-230,230)",
        x: "random(-230,230)",
        ease: "power3.inOut",
        onStart: randomColor(),
        stagger: {
          from: "random",
          ease: "end",
          amount: 1
        }
      });

      tl.fromTo( kvTitle, 2, {
        opacity: 0 
      },
        {
          opacity: 1,
          ease: "power.inOut",
      }, "=-0.3");

      tl.to(navigation, 0.7, {
        y: 0, 
        opacity: 1, 
        ease: "power1.inOut",
        onComplete: hideShowNav()
      }, "=-1.2");

      
}

function randomColor(){
 
  gsap.to (".js-squares", 1,{
    fill:sample(colours),

    repeat: -1,
    yoyo: true,
    stagger: {
      fron: "center",
      amount: 2,
      ease: "none" 
    }
  });

  // gsap.to (".js-squares", 5,{
  //   transformOrigin: "left top",
  //   rotation: "15deg",
  //   repeat: 3
  // });
}
function initModalVideo(){
  const videoBtns = document.querySelectorAll('.js-video-btn');
  //const videoBtn = document.querySelector('.video-btn');
  const videoModal = document.getElementById('videoModal');
  const video = document.getElementById('video');
  let videoSrc;
  videoBtns.forEach(function(videoBtn) {
    videoBtn.addEventListener('click', function() {
      videoSrc = this.getAttribute('data-bs-src')
    });
  })


videoModal.addEventListener('shown.bs.modal',(e)=>{
    video.setAttribute('src', videoSrc + '?autoplay=1&amp;modestbranding=1&amp;showinfo=01&amp;fs=1&amp;')
})

videoModal.addEventListener('hide.bs.modal',(e)=>{
    video.setAttribute('src', videoSrc)
})

}

// hide show nav
function hideShowNav(){
  const showAnim = gsap.from( navigation, { 
    yPercent: -100,
    paused: true,
    duration: 0.5
  }).progress(1);
  
  ScrollTrigger.create({
    start: "top top",
    end: 99999,
    onUpdate: (self) => {
      self.direction === -1 ? showAnim.play() : showAnim.reverse()
    }
  });
  
}

function initMbNav(){
  const mbNavBtn = document.querySelector('.c-mb-navbtn');

    mbNavBtn.onclick = function() {
      this.classList.toggle('is-active');
      mbNav.classList.toggle('is-active');
   }

   var links = document.querySelectorAll('.mb-link');

   links.forEach(function(el, i) {
     el.addEventListener('click', function() {
      mbNav.classList.toggle('is-active');
     })
   });


   
   

  }

function cloneTicker(){

  function appendNCopies(n, original, appendTo) {
      for(var i = 0; i < n; i++) {
          var clone = original.cloneNode(true);
          appendTo.appendChild(clone);
      }
  }
 var myTickerContainer = document.querySelector(".c-ticker__content");
  var myDiv = document.querySelector(".c-ticker_dup");
    appendNCopies(3, myDiv, myTickerContainer); 

}
function hideNavOnLoad(){
  mbNav.classList.remove('is-hidden');
}


function initSectionAnimation() {
 
    
  // select all sections .with-parallax
  gsap.utils.toArray('.p-section').forEach(section => {

      // get the items
      const title = section.querySelector('.c-section-title__title');
      const squares = section.querySelectorAll('.title-squares');
      const sectionBody = section.querySelector('.c-section-content');
      const animateIn = section.querySelectorAll('.js-in');
      const profileCardWrap = section.querySelector('.p-profile');
      const profileCard = section.querySelectorAll('.c-profile');
      const video = section.querySelector('.video');
      const videoCard = section.querySelectorAll('.c-video-btn');

      const bgSquares = section.querySelectorAll('.c-bgImg');

    
      // tween for Title
      if (title) {
      gsap.fromTo(title, {
        yPercent: 20,
        rotation: -22,
        opacity: 0,
        ease: "power1.inOut",
      },{
        rotation: 0,
        opacity: 1,
        duration: 1,
        yPercent: 0,
        scrollTrigger: {
          trigger: section,
          start: '0% 90%', 
          toggleActions: "play none none reverse ",  
         
      }
      });
  
      //tween for title deco
    gsap.fromTo(squares, {
      transformOrigin: "center center",
      rotation: 180,
      opacity: 0,
      scale: 0,
      y: "random(-330,330)",
      x: "random(-330,330)",
      ease: "power3.inOut",
      }, {
        duration: 2,
        rotation: 0,
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0,
        ease: "power3.inOut",
        scrollTrigger: {
                trigger: section,
                start: '-10% 90%', 
                toggleActions: "play none none reverse ",
                //  markers: {startColor: "orange", endColor: "blue", fontSize: "18px", fontWeight: "bold", indent: 20}
                // end: 'bottom bottom',   
            }
      });
    }
      if (sectionBody) {
      // tween for text body
      gsap.fromTo(animateIn, {
        y: 200,
        opacity: 0,
        rotation: 15,
      }, {
        duration: 1,
        y: 0,
        opacity: 1,
        rotation: 0,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: section,
          start: '0% 70%', 
          toggleActions: "play none none reverse ",
          // end: 'bottom bottom',   
      }
      });
     }
     if (video) {
      // tween for video
      gsap.fromTo(videoCard, {
        y: 200,
        opacity: 0,
        rotation: -15,
      }, {
        duration: 1,
        y: 0,
        opacity: 1,
        rotation: 0,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: videoCard,
          start: '30% 90%', 
          toggleActions: "play none none reverse ",
      }
      });
    }


    if (profileCardWrap) {
      // tween for profile card
      gsap.fromTo(profileCard, {
        transformOrigin: "center center",
        rotation: 22,
        opacity: 0,
        }, {
          rotation: 0,
          opacity: 1,
          stagger: {
            from: "start",
            ease: "back.easein",
            amount: 0.5
          },
          scrollTrigger: {
                  trigger: section,
                  start: '20% 80%', 
                  end: '40% center',
                  toggleActions: "play none none reverse ",          
                  // end: 'bottom bottom',   
              }
        });
      }
  

  });

}



function initParallaxSpeed(){
  gsap.set ("[data-speed]", {
      y: (i, el) => parseFloat(el.getAttribute("data-speed"))+ "vh"
    
  });
  gsap.utils.toArray('[data-speed]').forEach(el => {
  gsap.to(el, {
      y: 0,
      ease: "none",
      scrollTrigger: {
      trigger: el,
        start: 0,
        end: "top top",
        invalidateOnRefresh: true,
        scrub: 0
      }
     
    });
  });

}



init();

function init(){

  initSmoothScrollBar();
  initScrollto();
  kvAnimation();
  initModalVideo();
  initMbNav();
  cloneTicker();  
  hideNavOnLoad();
  initSectionAnimation();
  initParallaxSpeed();

}