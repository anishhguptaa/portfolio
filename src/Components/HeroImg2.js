import "./HeroImg2Styles.css"
import React, { Component } from 'react'

export class HeroImg2 extends Component {
  render() {
    return (
    <div className="hero-img">
        <div className="heading">
            <h1>{this.props.heading}</h1>
            <p className="text">{this.props.text}</p>
            {/* {this.props.text2 && <p className="text2">{this.props.text2}</p>} */}
            <p className="text2">{this.props.text2}</p>
        </div>
    </div>
    )
  }
}

export default HeroImg2