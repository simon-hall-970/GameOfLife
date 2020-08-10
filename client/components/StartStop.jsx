import React from 'react'
import nextBoard from './GameFunctions/nextBoard'
import { connect } from 'react-redux'
import { randomBoard } from '../actions/board'

class StartStop extends React.Component {

    state ={
        playing: false
    }

    myInt

    play =() =>{
        let playing = !this.state.playing
        this.setState({
            playing,
        }, () => {
            if (this.state.playing) {
                this.myInt = setInterval(() => {
                    let nextGen = nextBoard(this.props.board)
                    this.props.dispatch(randomBoard(nextGen))
                }, 30)
            } else {clearInterval(this.myInt)}
        })
    }

    render() {
        return (
            <button className={this.state.playing ? "stop" : "start"} onClick={this.play}>
                {this.state.playing ? "■" : "▶"}
            </button>
        )
    }
}
function mapStateToProps(reduxState){
    return({
        board: reduxState.board
    })
}
export default connect(mapStateToProps)(StartStop)