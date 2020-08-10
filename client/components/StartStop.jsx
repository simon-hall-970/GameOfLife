import React from 'react'

class StartStop extends React.Component {

    state ={
        playing: false
    }

    play =() =>{
        let playing = !this.state.playing
        this.setState({
            playing,
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

export default StartStop