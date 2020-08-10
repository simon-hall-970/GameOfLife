import React from 'react'

class Cell extends React.Component {


    render() {
        return(
        <div className={`cell ${this.props.cellState ? "live" : "dead"}`}/>
        )
    }
}

export default Cell