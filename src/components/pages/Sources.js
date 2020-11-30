import React from 'react'
import { Grid, Header } from 'semantic-ui-react'
import dummy from '../../styles/Dummy.module.css'
import { FormattedMessage } from 'react-intl'


const Sources = () => {
  return (
    <Grid id={'Sources'} className={dummy.template} textAlign={'center'} verticalAlign={'middle'}
          style={{ padding: '3em', maxWidth: '900px', margin: 'auto' }}>
      <Grid.Row>
        <Grid.Column width={16}>
          <Header style={{ marginBottom: '2em', fontFamily: 'Chalkduster, fantasy' }}>
            <FormattedMessage id="web.sources.title"
                              defaultMessage="Sources"
                              description="Sources title"/>
          </Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <p>
            <FormattedMessage id="web.sources.description"
                              defaultMessage="Pdf with all used sources to be seen "
                              description="Sources description"/>
            <a target={'_blank'} href={'https://docs.google.com/presentation/d/1606uN2NHvwmdHg4ohDmivBkmMbdAwFbotPx0eSXmrSI/edit?usp=sharing'}>
              <FormattedMessage id="common.here.title"
                               defaultMessage=" here"
                               description="here note"/>
            </a>.
          </p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default Sources
