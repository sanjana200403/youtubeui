import React from 'react'
import './Navbar.css'

const Navbar = ({handleNav}) => {
  return (
    <nav className='flex-div'>
        <div className="nav-left">
            <img 
            onClick={handleNav}

            className='nav-menu'
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVlrM_gPuWI1eV2W8gV053gI9fl_rFe9Tb5x1hMf08rA&s" alt="" />
            <img 
            id='logo'
            src="https://youtube-clone.netlify.app/static/media/youtube-logo.7a6d622f.png" alt="" />
        </div>
        <div className="nav-middle flex-div">
            <div className="search-box flex-div">
                <input type="text" placeholder='Search' />
                <img src="https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-5.png"
                className='search'
                alt="" />
            </div>
            <img src="https://toppng.com/uploads/preview/mic-icon-11553430296usfhy8bwwf.png" alt="" className='mic' />
        </div>
        <div className="nav-right">
            <img src="https://w7.pngwing.com/pngs/757/1013/png-transparent-upload-video-film-movie-user-interface-icon.png" alt="" />
            <img src="https://w7.pngwing.com/pngs/501/456/png-transparent-computer-icons-others-rectangle-black-grid.png" alt="" />
            <img src="https://png.pngtree.com/png-vector/20191004/ourmid/pngtree-bell-icon-png-image_1791341.jpg" alt="" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMj-e35IfOmmGVKaOe-UMAfYuitxR67Xd0LeQD9PoesA&s"
            id='user'
            alt="" />
          
        </div>
      
    </nav>
  )
}

export default Navbar
