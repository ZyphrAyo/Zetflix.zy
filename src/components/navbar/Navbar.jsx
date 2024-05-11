import React, { useState } from 'react'
import "./navbar.scss"
import { ArrowDropDown, Notifications, Search } from '@material-ui/icons'
const Navbar = () => {
    const [isScrolled,setIsScrolled]=useState(false)
    // setting initial use state as false

    window.onscroll=()=>{
        setIsScrolled(window.pageYOffset ===0 ? false :true)   
            return()=>window.onscroll=null

        // we call the set is scrolled to check if the window is scrolled in y direction is the ofset is 0 then not scrolled else greater than 0 then scrolled
    };
  return (
    <div className={isScrolled ? "navbar scrolled" :"navbar"}>
        <div className="container">
            <div className="left">
                <img src='https://logos-download.com/wp-content/uploads/2016/03/Netflix_Logo_2014-2048x550.png'/>
            <span>Homepage</span>
            <span>Series</span>
            <span>Movies</span>
            <span>New and Popular</span>
            <span>My List</span>
            </div>
            
            <div className="right">
                <Search className='icon'/>
                <span>KID</span>
                <Notifications className='icon'/>
                <img src='https://lh3.googleusercontent.com/a/ACg8ocICAX-g8AA1BJEGq4gVi_tlql3vIpR9JVwZVqYjSAzeKck=s360-c-no'/>
                <div className="profile"> 
                <ArrowDropDown className='icon'/>
                <div className="options">
                    <span>Settings</span>
                    <span>Logout</span>
                </div>
                </div>
                
            </div>
            
        </div>
    </div>
  )
}

export default Navbar