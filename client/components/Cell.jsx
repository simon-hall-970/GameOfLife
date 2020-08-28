import React from 'react'

class Cell extends React.Component {


    render() {
        return(
        <div onClick={this.changeState} className={`cell ${this.props.cellState ? "live" : "dead"}`}/>
        )
    }
}

export default Cell