import React from 'react'
import { Grid, Header } from 'semantic-ui-react'
import dummy from '../../styles/Dummy.module.css'
import { FormattedMessage } from 'react-intl'


const Goal = () => {
  return (
    <Grid id={'Goal'} className={dummy.template} textAlign={'center'} verticalAlign={'middle'}
          style={{ padding: '3em', maxWidth: '900px', margin: 'auto' }}>
      <Grid.Row>
        <Grid.Column width={16}>
          <Header style={{ marginBottom: '2em', fontFamily: 'Chalkduster, fantasy' }}>
            <FormattedMessage id="web.goal.title"
                              defaultMessage="Goal"
                              description="Goal title"/>
          </Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <p>
            <FormattedMessage id="web.goal.description"
                              defaultMessage="Traffic signs detection and recognition via mobile app from a phone located on a car dashboard in real time."
                              description="Goal description"/>
          </p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default Goal
