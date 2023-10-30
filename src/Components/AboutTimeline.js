import React from 'react'
import WorkData from './WorkData';
import EducationData from './EducationData';
import WorkIcon from '@mui/icons-material/Work';
import PlaceIcon from '@mui/icons-material/Place';
import SchoolIcon from '@mui/icons-material/School';
import BusinessIcon from '@mui/icons-material/Business';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

import 'react-vertical-timeline-component/style.min.css';
import {VerticalTimeline, VerticalTimelineElement}  from 'react-vertical-timeline-component';

const workElementStyle={
    background: "#17262b",
    color:"white",
    boxShadow:"none",
    borderRadius: "1rem"
}
const eduElementStyle={
    background: "#1e222e",
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
const eduIconStyle={
    background: "#3e497a",
    color: "white"
}
const locationStyle={
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
}

const AboutTimeline = () => {
    return(
        <div>

            <VerticalTimeline lineColor="rgba(65, 64, 64, 1)">
                {WorkData.map((value, index) => {
                    return(
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentArrowStyle={arrowStyle}
                            date={value.date}
                            contentStyle={workElementStyle}
                            iconStyle={workIconStyle}
                            icon={<WorkIcon />}
                        >
                            <h4>{value.title}</h4>
                            <div style={locationStyle}>
                                <BusinessIcon/>
                                <h3 style={{marginLeft:"0.3rem"}}>{value.company}</h3>
                            </div>
                            <br/>
                            {value.location && <div style={locationStyle}>
                                <PlaceIcon/>
                                <p style={{margin:"0"}}>{value.location}</p>
                            </div>}
                        </VerticalTimelineElement>
                    )
                })}
                {EducationData.map((value, index) => {
                    return(
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date={value.date}
                            contentArrowStyle={arrowStyle}
                            contentStyle={eduElementStyle}
                            iconStyle={eduIconStyle}
                            icon={<SchoolIcon />}
                        >
                            <h4>{value.title}</h4>
                            <div style={locationStyle}>
                                <AccountBalanceIcon/>
                                <h3 style={{marginLeft:"0.3rem"}}>{value.institute}</h3>
                            </div>
                            <br/>
                            {value.location && <div style={locationStyle}>
                                <PlaceIcon/>
                                <p style={{margin:"0"}}>{value.location}</p>
                            </div>}
                        </VerticalTimelineElement>
                    )
                })}
            </VerticalTimeline>
        </div>
    )
}

export default AboutTimeline