import React from 'react'
import Randomize from './Randomize'
import StartStop from './StartStop'




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
            <StartStop />
           

       
        </div>
    )
}

export default Header