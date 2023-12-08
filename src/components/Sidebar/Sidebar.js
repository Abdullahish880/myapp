import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import Main from '../Main'
import Nav from './Nav'

const Sidebar = () => {

    return (
        <div className='container-fluid'>
            <div className='row '>
                <div className='bg-black  col-md-2 min-vh-100 '>
                    <a className='text-decoration-none text-white d-flex align-items-center'>
                        <span className='ms-4 fs-4 mt-4'>
                            <img src="./pics/logo.png" alt="" />
                        </span>

                    </a>
                    <ul class="nav nav-pills flex-column">
                        <li class="nav-item text-white fs-4">
                            <a href="#" class="nav-link text-white fs-5 " aria-current="page">
                                <i className=''></i>
                                <span className='fs-6'>Leslie Alexander <br /><span className='ms-3'>Car Driver</span></span>
                            </a>

                        </li>
                        <li class="nav-item text-white fs-4">
                            <a href="#" class="nav-link text-white fs-6 mt-2 " aria-current="page">
                                <span className='ms-4 '>Status <br />
                                    <button className=' bg-success rounded-pill w-50 text-white'>Avialible | +</button>

                                </span>
                            </a>
                        </li>
                        <li class="nav-item text-white fs-4">
                            <a href="#" class="nav-link text-white fs-5 " aria-current="page">
                                <img src="./pics/dashboard.png" alt="" />

                                <span className='ms-1'>  Dashboard</span>
                            </a>
                        </li>
                        <li class="nav-item text-white fs-4">
                            <a href="#" class="nav-link text-white fs-5 " aria-current="page">
                                <img src="./pics/user.png" alt="" />

                                <span className='ms-2'>Protfolio</span>
                            </a>
                        </li>
                        <li class="nav-item text-white fs-4">
                            <a href="#" class="nav-link text-white fs-5 " aria-current="page">
                                <img src="./pics/history.png" alt="" />
                                <span className='ms-2'>History</span>
                            </a>
                        </li>
                        <li class="nav-item text-white fs-4">
                            <a href="#" class="nav-link  text-white fs-5 " aria-current="page">
                                <img src="./pics/setting.png" alt="" />
                                <span className='ms-2'>Settings</span>
                            </a>
                        </li>
                        <li class="nav-item text-white fs-4 mt-5">
                            <a href="#" class="nav-link text-white fs-5 mt-5 " aria-current="page">
                                <button className='ms-2 rounded-pill w-50 text-white bg-dark d-flex'>Logout<span className='ms-1'> |</span>
                                    <img src="./pics/logout.png" alt="" className='h-50 mt-2 ms-1' />
                                </button>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className=' col-md-10 new '>
                    <Nav />

                    <Main />

                </div>


            </div>
        </div>

    )
}

export default Sidebar
