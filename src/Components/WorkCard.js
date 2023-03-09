import "./WorkCardStyles.css"
import React from 'react'
import { Link } from "react-router-dom"

const WorkCard = (props) => {
  return (
    <div className="project-container">
            <div className="project-card">
                <img src={props.imgsrc} alt="Project display" />
                <h2 className="project-title">{props.title}</h2>
                <p className="project-details">{props.text}.</p>
                <div className="pro-btns">
                    <Link to="props.view" className="btn">View</Link>
                    <Link to="props.source" className="btn">Source</Link>
                </div>
            </div>
        </div>
  )
}

export default WorkCard