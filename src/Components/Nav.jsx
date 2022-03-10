import React from 'react'
import {Link} from "react-router-dom"

function Nav() {
  return (
    
        <nav>
        <ul className='Nav'>
            
            <Link  style={{textDecoration: 'none'}} to ='Gotham'>
            <li>
             <img className='imgLink' src='/images/pow.png'></img>
            </li>
            </Link>
            <Link style={{textDecoration: "none"}} to ='ListBatStuff'>
            <li>
            <img className='imgLink' src='/images/boom2.jpg'></img>
            </li>
            </Link>
            {/* Left links in for testing */}
            {/* <Link style={{textDecoration: "none"}} to ='UpdateBatStuff'>
            <li>
            Update Bat-Computer
            </li>
            </Link>
            <Link style={{textDecoration: "none"}} to ='DeleteBatStuff'>
            <li> 
            Delete from Bat-Computer
            </li>
            </Link>   
             <Link style={{textDecoration: "none"}} to ='ViewBatStuff'>
            <li>
            View Bat-Computer
            </li>
            </Link> */}
            
            <Link style={{textDecoration: "none"}} to ='AddBatStuff'>
            <li>
            <img className='imgLink' src='/images/zoink2.jpg'></img>
            </li>
            </Link>


    

        </ul>
        </nav>
    
  )
}

export default Nav