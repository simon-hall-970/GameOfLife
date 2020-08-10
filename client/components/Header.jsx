import React from 'react'

function Header() {
    return(
        <div className="head container">
            <h1>
                The Game of Life
            </h1>

            <div className="gridsize">
                select grid size
            </div>

            <div className="genesis">
                original board state
            </div>
           
            <div className="start stop">
                start/stop
            </div>
       
        </div>
    )
}

export default Header