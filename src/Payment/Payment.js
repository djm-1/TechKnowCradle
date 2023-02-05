import React from 'react'

export default function Payment() {
  return (
    <>
    <div style={{background:'#3D2645'}}>
        <svg  data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" ><path  d="M0,0V6c0,21.6,291,111.46,741,110.26,445.39,3.6,459-88.3,459-110.26V0Z" class="shape-fill" fill="#FFFFFF" fill-opacity="1"></path></svg>
    
        <h1 className='text-white hero my-5 text-center'
        data-aos="fade-up"
        data-aos-duration="1600"
        >Book a slot right now!</h1>
<div className='card w-75 mx-auto'>
    <div className='card-body'>
    <ul class="nav nav-pills mb-3" id="ex1" role="tablist">
  <li class="nav-item" role="presentation">
    <a
      class="nav-link active"
      id="ex1-tab-1"
      data-mdb-toggle="pill"
      href="#ex1-pills-1"
      role="tab"
      aria-controls="ex1-pills-1"
      aria-selected="true"
      >UPI</a
    >
  </li>
  <li class="nav-item" role="presentation">
    <a
      class="nav-link"
      id="ex1-tab-2"
      data-mdb-toggle="pill"
      href="#ex1-pills-2"
      role="tab"
      aria-controls="ex1-pills-2"
      aria-selected="false"
      >Cash</a
    >
  </li>
</ul>

<div class="tab-content" id="ex1-content">
  <div
    class="tab-pane fade show active"
    id="ex1-pills-1"
    role="tabpanel"
    aria-labelledby="ex1-tab-1"
  >
    Tab 1 content
  </div>
  <div class="tab-pane fade" id="ex1-pills-2" role="tabpanel" aria-labelledby="ex1-tab-2">
    Tab 2 content
  </div>
</div>

    </div>
</div>        

    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 280"><path fill="#3D2645" fill-opacity="1" d="M0,32L48,69.3C96,107,192,181,288,186.7C384,192,480,128,576,138.7C672,149,768,235,864,250.7C960,267,1056,213,1152,176C1248,139,1344,117,1392,106.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
    </>
  )
}
