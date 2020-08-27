import React from 'react'
import Randomize from './Randomize'
import StartStop from './StartStop'




function Header() {

    return(
        <div className="head container">
            <div></div> {/* three empty divs to hack 'flexbox: space evenly' css*/}
            <div></div>
            <div></div>
            <h1>
                Conway's Game of Life
            </h1>

            {/* <button className="gridsize">
                select grid size
            </button> */}

            <Randomize />
            <StartStop />
           

       
        </div>
    )
}

export default Header