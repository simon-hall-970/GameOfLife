import React from 'react'
import Randomize from './Randomize'




function Header() {

    return(
        <div className="head container">
            <h1>
                The Game of Life
            </h1>

            <button className="gridsize">
                select grid size
            </button>

            <Randomize />
           
            <button className="start stop">
                start/stop
            </button>
       
        </div>
    )
}

export default Header