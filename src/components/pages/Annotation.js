import React from 'react'
import { Grid, Header } from 'semantic-ui-react'
import dummy from '../../styles/Dummy.module.css'
import { FormattedMessage } from 'react-intl'


const Annotation = () => {
  return (
    <Grid id={'Annotation'} className={dummy.template} textAlign={'center'} verticalAlign={'middle'}
          style={{ padding: '3em', maxWidth: '900px', margin: 'auto' }}>
      <Grid.Row>
        <Grid.Column width={16}>
          <Header style={{ marginBottom: '2em', fontFamily: 'Chalkduster, fantasy' }}>
            <FormattedMessage id="web.annotation.title"
                              defaultMessage="Annotation"
                              description="Annotation title"/>
          </Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <p>
            <FormattedMessage id="web.annotation.description"
                              defaultMessage="Traffic signs detection and recognition via mobile app from a phone located on a car dashboard in real time."
                              description="Annotation description"/>
          </p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default Annotation
