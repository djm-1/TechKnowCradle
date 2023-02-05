import React from "react";
import "./Timeline.css";
export default function Timeline() {
  return (
    <div>
      <section style={{ backgroundColor: "#3D2645" }}>
        {" "}
        <h1
          className="hero text-white text-center pt-5"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          Event Timeline
        </h1>
        <div class="container py-5">
          {" "}
          <div class="main-timeline">
            {" "}
            <div class="timeline left">
              {" "}
              <div class="card" data-aos="fade-right" data-aos-duration="1500">
                {" "}
                <div class="card-body p-4">
                  {" "}
                  <h3>xyz</h3> <p class="mb-0">details</p>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div class="timeline right">
              {" "}
              <div class="card" data-aos="fade-left" data-aos-duration="1500">
                {" "}
                <div class="card-body p-4">
                  {" "}
                  <h3>xyz</h3> <div class="mb-0">details</div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div class="timeline left">
              {" "}
              <div class="card" data-aos="fade-right" data-aos-duration="1500">
                {" "}
                <div class="card-body p-4">
                  {" "}
                  <h3>xyz</h3> <p class="mb-0">details</p>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div class="timeline right">
              {" "}
              <div class="card" data-aos="fade-left" data-aos-duration="1500">
                {" "}
                <div class="card-body p-4">
                  {" "}
                  <h3>xyz</h3> <p class="mb-0">details</p>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div class="timeline left">
              {" "}
              <div class="card" data-aos="fade-right" data-aos-duration="1500">
                {" "}
                <div class="card-body p-4">
                  {" "}
                  <h3>xyz</h3> <p class="mb-0">details</p>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div class="timeline right">
              {" "}
              <div class="card" data-aos="fade-left" data-aos-duration="1500">
                {" "}
                <div class="card-body p-4">
                  {" "}
                  <h3>xyz</h3> <p class="mb-0">details</p>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>
      
      <svg  data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" ><path  d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill" fill="#3D2645" fill-opacity="1"></path></svg>      
    </div>
  );
}
