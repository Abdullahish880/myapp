import React from 'react'
import Section from './Sidebar/Section'
import { useNavigate } from 'react-router-dom'


const Main = () => {
  return (
    <div >
         <section>
            <div class="row">
              <div class="col-md-8 ms-3">
                <div class="row">
                  <div class="col-md-3 nav-height mt-2">
                    <p className='text-white'>Dashboard Welcome Aboard, Leslie Alexander</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-3 mt-2 p-3">
                <div class="card1">
                  <div class="row">
                    <div class="col-md-9">
                      <p class="text-white ms-4 mt-1 fs-5 m-0 p-0">215</p>
                      <p class="text-white m-0 p-0 ms-2">Total Jobs</p>
                      <img src="pics/graph.png" alt="" class="ms-2" />
                    </div>
                    <div class="col-md-3">
                      <img src="pics/bag.png" alt="" class="mt-2" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-3 mt-2 p-3">
                <div class="card1">
                  <div class="row">
                    <div class="col-md-9">
                      <p class="text-white ms-4 mt-1 fs-5 m-0 p-0">204</p>
                      <p class="text-white m-0 p-0 ms-2">Completed Jobs</p>
                      <img src="pics/graph1.png" alt="" class="ms-2" />
                    </div>
                    <div class="col-md-3">
                      <img src="pics/bag.png" alt="" class="mt-2" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-3 mt-2 p-3">
                <div class="card1">
                  <div class="row">
                    <div class="col-md-9">
                      <p class="text-white ms-4 mt-1 fs-5 m-0 p-0">008</p>
                      <p class="text-white m-0 p-0 ms-2">Waiting Jobs</p>
                      <img src="pics/graph2.png" alt="" class="ms-2" />
                    </div>
                    <div class="col-md-3">
                      <img src="pics/bag.png" alt="" class="mt-2" />
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-3 mt-2 p-3">
                <div class="card1">
                  <div class="row">
                    <div class="col-md-9">
                      <p class="text-white ms-4 mt-1 fs-5 m-0 p-0">003</p>
                      <p class="text-white m-0 p-0 ms-2">Cancel Jobs</p>
                      <img src="pics/graph3.png" alt="" class="ms-2" />
                    </div>
                    <div class="col-md-3">
                      <img src="pics/bag.png" alt="" class="mt-2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-2 nav-height mt-5 ms-3">
                <p class="text-white mt-3 fs-5 fw-normal">Job Posts</p>
              </div>
              <div class="col-md-5"></div>
              <div class="col-md-1 nav-height mt-5">
                <button class="mt-3 Add text-white">
                  Add Job
                  <span class="fs-6 fw-bold">| +</span>
                </button>
              </div>
              <div class="col-md-1"></div>

              <div class="col-md-1 nav-height mt-5">
                <p class="text-white mt-3 fs-5">Messages</p>
              </div>
            </div>
            <Section/>
          </section>
    </div>
  )
}

export default Main
