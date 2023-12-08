import React from 'react'

const Nav = () => {
  return (
    <div className=''>
       <div className="row ">
                        <div className="col-md-6 nav-height">
                            <img src="pics/main.png" alt />
                        </div>
                        <div className="col-md-4 nav-height d-flex">
                            <input type="search" placeholder="search" className="mt-2 w-100 bg-dark rounded-pill h-100" />
                            <button className="light mt-3 me-5 ">
                                <img src="pics/light.png" alt />
                            </button>
                        </div>

                       
                        <div className="col-md-1 nav-height">
                            <p className="mt-2">29 Aug 2023</p>
                        </div>
                        <div className="col-md-1 nav-height">
                            <img src="pics/bell.png" className="mt-2" />


                        </div>
                    </div>
    </div>
  )
}

export default Nav
