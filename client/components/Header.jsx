import React from 'react'
import Randomize from './Randomize'
import StartStop from './StartStop'




function Header() {

    return(
        <div className="head container">
            <div></div> {/* two empty divs to hack flexbox space evenly*/}
            <div></div>
            <h1>
                The Game of Life
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