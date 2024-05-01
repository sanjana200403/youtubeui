import React from 'react'
import './Sidebar.css'
import { useRef } from 'react'

const Sidebar = ({navRef}) => {
   
  return (
    <div className='sidebar' 
    ref={navRef}
    >
      
        <div className="shortcut-links">
            <a href="">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/014/391/893/small/home-icon-isolated-on-transparent-background-black-symbol-for-your-design-free-png.png" alt="" /><p>Home</p>
            </a>
            <a href="">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/014/391/893/small/home-icon-isolated-on-transparent-background-black-symbol-for-your-design-free-png.png" alt="" /><p>Explore</p>
            </a>
            <a href="">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/014/391/893/small/home-icon-isolated-on-transparent-background-black-symbol-for-your-design-free-png.png" alt="" /><p>Subscription</p>
            </a>
            <a href="">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/014/391/893/small/home-icon-isolated-on-transparent-background-black-symbol-for-your-design-free-png.png" alt="" /><p>Library</p>
            </a>
            <a href="">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/014/391/893/small/home-icon-isolated-on-transparent-background-black-symbol-for-your-design-free-png.png" alt="" /><p>History</p>
            </a>
            <a href="">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/014/391/893/small/home-icon-isolated-on-transparent-background-black-symbol-for-your-design-free-png.png" alt="" /><p>Play</p>
            </a>
            <a href="">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/014/391/893/small/home-icon-isolated-on-transparent-background-black-symbol-for-your-design-free-png.png" alt="" /><p>Messages</p>
            </a>
            <a href="">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/014/391/893/small/home-icon-isolated-on-transparent-background-black-symbol-for-your-design-free-png.png" alt="" /><p>Messages</p>
            </a>
            <hr />
        </div>
        <div className="subscribe-list">
            <h3>SUBSCRIBE</h3>
            <a href="">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA3TosHxBFDRRCFq--PZi6uH9fAtM3u0_3ouup2NOQtg&s" alt="" />
                <p>Code with Harry</p>
            </a>
            <a href="">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA3TosHxBFDRRCFq--PZi6uH9fAtM3u0_3ouup2NOQtg&s" alt="" />
                <p>Code with Harry</p>
            </a>
            <a href="">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA3TosHxBFDRRCFq--PZi6uH9fAtM3u0_3ouup2NOQtg&s" alt="" />
                <p>Code with Harry</p>
            </a>
            <a href="">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA3TosHxBFDRRCFq--PZi6uH9fAtM3u0_3ouup2NOQtg&s" alt="" />
                <p>Code with Harry</p>
            </a>
        </div>
      
    </div>
  )
}

export default Sidebar
