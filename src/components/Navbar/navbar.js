import React from 'react'
import { AiOutlineMenu } from "react-icons/ai"
import "./navbar.css"

function Navbar() {
  return (
    <div>
      <nav className="mobile-nav">
        <h3>Per Aqua</h3>
        <div>
          <AiOutlineMenu color='white' size={30}/>
        </div>
      </nav>
    </div>
  )
}

export default Navbar