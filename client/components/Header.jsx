import React from 'react'




function Header() {
    return(
        <div className="head container">
            <h1>
                The Game of Life
            </h1>

            <button className="gridsize">
                select grid size
            </button>

            <button className="genesis">
                randomize initial state
            </button>
           
            <button className="start stop">
                start/stop
            </button>
       
        </div>
    )
}

export default Header