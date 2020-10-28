import React from 'react'
import { List } from 'semantic-ui-react'


const Experience = ({ icon, title, description }) => {

  return (
    <List.Item>
      <List.Icon name={icon} size={'large'} verticalAlign={'middle'} />
      <List.Content>
        <List.Header>{title}</List.Header>
        <List.Description>{description}</List.Description>
      </List.Content>
    </List.Item>
  )
}

export default Experience
