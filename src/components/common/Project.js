import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'


const Project = ({ image, title, meta, description, onButtonClick, btnVisibleLabel, btnHiddenLabel }) => {

  return (
    <Card style={{
      border: '1.5px black solid',
      borderRadius: '3px',
      width: '350px',
      boxShadow: '0px 0px 15px 15px rgba(0, 0, 0, 0.1), 0px 0px 13px 10px rgba(0, 0, 0, 0.3), 0px 0px 10px 5px rgba(0, 0, 0, 0.5)',
      margin: '2em',
    }}>
      <Image src={image} wrapped ui={false}/>
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>{meta}</Card.Meta>
        <Card.Description>
          {description}
        </Card.Description>
      </Card.Content>
      <Card.Content>
        <Button onClick={onButtonClick} animated={'vertical'}>
          <Button.Content visible>{btnVisibleLabel}</Button.Content>
          <Button.Content hidden>{btnHiddenLabel}</Button.Content>
        </Button>
      </Card.Content>
    </Card>
  )
}

export default Project
