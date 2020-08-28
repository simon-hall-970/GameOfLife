import React from 'react'
import nextBoard from './GameFunctions/nextBoard'
import { connect } from 'react-redux'
import { randomBoard } from '../actions/board'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faStop} from '@fortawesome/free-solid-svg-icons'

class StartStop extends React.Component {

    state ={
        playing: false
    }
    //declare interval variable
    myInt

    play =() =>{
        let playing = !this.state.playing
        this.setState({
            playing,
        }, () => {
            if (this.state.playing) {
                this.myInt = setInterval(() => {
                    let nextGen = nextBoard(this.props.board)
                    this.props.dispatch(udpateBoard(nextGen))
                }, 10)
            } else {clearInterval(this.myInt)}
        })
    }

    playIcon = <FontAwesomeIcon icon={faPlay} />
    stopIcon = <FontAwesomeIcon icon={faStop} />

    render() {
        return (
            <button className={this.state.playing ? "stop" : "start"} onClick={this.play}>
                {this.state.playing ? this.stopIcon : this.playIcon }
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