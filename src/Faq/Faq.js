import React from 'react'
import './Faq.css';
export default function Faq() {
  return (
    <div id="faq">
    <h1 className= "hero text-center mt-4" style={{color:'#DA4167'}}
>
      Frequently Asked Questions
    </h1>
    <div class = "container mb-5">
    <div class="row justify-content-md-center m-0">
    <div class = "col-md-6 text-center">
      <img class = "faq-img img-fluid" style={{
        width:'300px'
      }} src='/img3.png'
      data-aos="zoom-in"
      data-aos-duration="2000"
      />
    </div>
    <div class = "col-md-6">
    <div class="accordion accordion-flush" id="accordionExampleY">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOneY">
      <button class="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
        data-mdb-target="#collapseOneY" aria-expanded="false" aria-controls="collapseOneY">
        <i class="fas fa-question-circle fa-sm me-2 opacity-70"></i>Accordion Item #1
      </button>
    </h2>
    <div id="collapseOneY" class="accordion-collapse collapse" aria-labelledby="headingOneY"
      data-mdb-parent="#accordionExampleY">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is hidden by
        default, until the collapse plugin adds the appropriate classes that we use to
        style each element. These classes control the overall appearance, as well as
        the showing and hiding via CSS transitions. You can modify any of this with
        custom CSS or overriding our default variables. It's also worth noting that
        just about any HTML can go within the <code>.accordion-body</code>, though the
        transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwoY">
      <button class="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
        data-mdb-target="#collapseTwoY" aria-expanded="false" aria-controls="collapseTwoY">
        <i class="fas fa-question-circle fa-sm me-2 opacity-70"></i>Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwoY" class="accordion-collapse collapse" aria-labelledby="headingTwoY"
      data-mdb-parent="#accordionExampleY">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by
        default, until the collapse plugin adds the appropriate classes that we use to
        style each element. These classes control the overall appearance, as well as
        the showing and hiding via CSS transitions. You can modify any of this with
        custom CSS or overriding our default variables. It's also worth noting that
        just about any HTML can go within the <code>.accordion-body</code>, though the
        transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThreeY">
      <button class="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
        data-mdb-target="#collapseThreeY" aria-expanded="false" aria-controls="collapseThreeY">
        <i class="fas fa-question-circle fa-sm me-2 opacity-70"></i>Accordion Item #3
      </button>
    </h2>
    <div id="collapseThreeY" class="accordion-collapse collapse" aria-labelledby="headingThreeY"
      data-mdb-parent="#accordionExampleY">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by
        default, until the collapse plugin adds the appropriate classes that we use to
        style each element. These classes control the overall appearance, as well as
        the showing and hiding via CSS transitions. You can modify any of this with
        custom CSS or overriding our default variables. It's also worth noting that
        just about any HTML can go within the <code>.accordion-body</code>, though the
        transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThreeY">
      <button class="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
        data-mdb-target="#collapseFourY" aria-expanded="false" aria-controls="collapseFourY">
        <i class="fas fa-question-circle fa-sm me-2 opacity-70"></i>Accordion Item #4
      </button>
    </h2>
    <div id="collapseFourY" class="accordion-collapse collapse" aria-labelledby="headingFourY"
      data-mdb-parent="#accordionExampleY">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by
        default, until the collapse plugin adds the appropriate classes that we use to
        style each element. These classes control the overall appearance, as well as
        the showing and hiding via CSS transitions. You can modify any of this with
        custom CSS or overriding our default variables. It's also worth noting that
        just about any HTML can go within the <code>.accordion-body</code>, though the
        transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThreeY">
      <button class="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
        data-mdb-target="#collapseFiveY" aria-expanded="false" aria-controls="collapseFiveY">
        <i class="fas fa-question-circle fa-sm me-2 opacity-70"></i>Accordion Item #5
      </button>
    </h2>
    <div id="collapseFiveY" class="accordion-collapse collapse" aria-labelledby="headingFiveY"
      data-mdb-parent="#accordionExampleY">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by
        default, until the collapse plugin adds the appropriate classes that we use to
        style each element. These classes control the overall appearance, as well as
        the showing and hiding via CSS transitions. You can modify any of this with
        custom CSS or overriding our default variables. It's also worth noting that
        just about any HTML can go within the <code>.accordion-body</code>, though the
        transition does limit overflow.
      </div>
    </div>
  </div>
</div>
    </div>
    
    </div>
    </div>
    
    </div>
  )
}
