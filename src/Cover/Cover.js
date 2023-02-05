import React from "react";
import './Cover.css';
import AOS from 'aos';
import { useEffect } from "react";
import anime from "animejs/lib/anime.es.js"
export default function Cover() {
  
  useEffect(() => {
    // Wrap every letter in a span
var textWrapper = document.querySelector('.ml10 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml10 .letter',
    rotateY: [-90, 0],
    duration: 1700,
    delay: (el, i) => 45 * i
  }).add({
    targets: '.ml10',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
  }, [])
  
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);

  return (
    <>
    
    <div class="bg-image">
    <div class="mask" style={{backgroundColor: 'hsla(0, 0%, 0%, 0.45)'}}></div>    
   <div style={{position:'relative'}}>
   <img src="/jusc-only-logo.png" object-fit= 'cover' loading="lazy" alt="logo"/>
  <h3 style={{color:'#fff'}}>presents</h3>
    </div>   
  
  
    <h1 class="ml10">
      <span class="text-wrapper">
      
        <span class="letters mt-2">TechKnowCradle</span>

      </span>
    </h1>  
    <div class="custom-shape-divider-bottom-1675599593">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
    </div>
      
    <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
    <script src="CoverAnime.js"></script>
    </>
  );
}
