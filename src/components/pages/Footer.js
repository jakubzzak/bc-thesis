import React from 'react'
import { Grid, Icon } from 'semantic-ui-react'
import dummy from '../../styles/Dummy.module.css'


const Footer = () => {
  return (
    <Grid id={'Contact'} textAlign={'center'} className={dummy.contact} inverted style={{ padding: '1em' }}>
      <Grid.Row centered>
        <Grid.Column textAlign={'center'} style={{ color: '#ffffff', padding: '2em' }}>
          <Icon size={'small'} inverted name={'copyright outline'}/>
          2020-2021 Jakub Žák
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default Footer
