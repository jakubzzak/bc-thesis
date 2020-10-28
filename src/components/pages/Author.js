import React from 'react'
import { Grid, Header } from 'semantic-ui-react'
import dummy from '../../styles/Dummy.module.css'
import { FormattedMessage } from 'react-intl'


const Author = () => {
  return (
    <Grid id={'Goal'} className={dummy.template} textAlign={'left'} verticalAlign={'middle'}
          style={{ padding: '3em', maxWidth: '900px', margin: 'auto' }} stackable>
      <Grid.Row>
        <Grid.Column width={4} textAlign={"left"} style={{ paddingLeft: '4em' }}>
          <Header style={{ fontFamily: 'Chalkduster, fantasy' }}>
            <FormattedMessage id="web.author.advisor"
                              defaultMessage="Advisor"
                              description="Advisor"/>
                              :
          </Header>
        </Grid.Column>
        <Grid.Column width={12}>
          RNDr. Zuzana Černeková, PhD.
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={4} textAlign={"left"} style={{ paddingLeft: '4em' }}>
          <Header style={{ fontFamily: 'Chalkduster, fantasy' }}>
            <FormattedMessage id="web.author.author"
                              defaultMessage="Author"
                              description="Author"/>
                              :
          </Header>
        </Grid.Column>
        <Grid.Column width={12}>
          Jakub Žák, <a href={'mailto:jakubzak@uteg.sk'} style={{ textDecoration: "none", color: '#000' }}>jakubzak@uteg.sk</a>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default Author
