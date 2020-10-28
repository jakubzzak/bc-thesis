import React from 'react'
import { VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'


const TimelineItem = ({ date, icon, title, subtitle, description }) => {

  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: '#fff', color: '#000' }}
      contentArrowStyle={{ borderRight: '15px solid white' }}
      date={date}
      iconStyle={{ background: '#fff', color: '#fff', paddingTop: '1em'}}
      icon={icon}
    >
      <h3 className="vertical-timeline-element-title">{title}</h3>
      <h4 className="vertical-timeline-element-subtitle" style={{ color: 'grey' }}>{subtitle}</h4>
      <p>
        {description}
      </p>
    </VerticalTimelineElement>
  )
}

export default TimelineItem
