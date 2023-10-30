import React from 'react'
import ProjectData from './ProjectData';
import TerminalIcon from '@mui/icons-material/Terminal';
import 'react-vertical-timeline-component/style.min.css';
import {VerticalTimeline, VerticalTimelineElement}  from 'react-vertical-timeline-component';

const workElementStyle={
    background: "#17262b",
    color:"white",
    boxShadow:"none",
    borderRadius: "1rem"
}
const arrowStyle={
    display: "none"
}
const workIconStyle={
    background: "#2f4f59",
    color: "white",
}
const ProjectTimeline = () => {
    return(
        <div>

            <VerticalTimeline lineColor="rgba(65, 64, 64, 1)">
                
                {ProjectData.map((value, index) => {
                    return(
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentArrowStyle={arrowStyle}
                            contentStyle={workElementStyle}
                            iconStyle={workIconStyle}
                            icon={<TerminalIcon />}
                        >
                            <h4>{value.title}</h4>
                            <h3>{value.tech}</h3>
                            <p>{value.text1}</p>
                            <p>{value.text2}</p>
                            <br/><br/>
                            <div className="pro-btns">
                                {value.source && <a href={value.source} className="btn">
                                Source
                                </a>}
                                {value.view && <a href={value.view}  className="btn">
                                View
                                </a>}
                            </div>
                        </VerticalTimelineElement>
                    )
                })}
            </VerticalTimeline>
        </div>
    )
}

export default ProjectTimeline