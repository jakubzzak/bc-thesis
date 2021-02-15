import React from 'react'
import { Grid, Header } from 'semantic-ui-react'
import dummy from '../../styles/Dummy.module.css'
import { FormattedMessage } from 'react-intl'
import mainScreenPreview from '../../assets/mainScreen.png'


const Prototype = () => {
  return (
    <Grid id={'Prototype'} className={dummy.template} textAlign={'center'} verticalAlign={'middle'}
          style={{ padding: '3em', maxWidth: '900px', margin: 'auto' }}>
      <Grid.Row>
        <Grid.Column width={16}>
          <Header style={{ marginBottom: '2em', fontFamily: 'Chalkduster, fantasy' }}>
            <FormattedMessage id="web.prototype.title"
                              defaultMessage="Prototype or embracing swift"
                              description="Prototype title"/>
          </Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <p>
            <FormattedMessage id="web.prototype.description"
                              defaultMessage="Working repository can be found "
                              description="Prototype description"/>
            <a target={'_blank'} href={'https://github.com/jakubzzak/trafficSignRecognition'}>
              <FormattedMessage id="common.here.title"
                               defaultMessage=" here"
                               description="here note"/>
            </a>.
          </p>
          <p>
            <img src={mainScreenPreview} alt={"Main screen preview"} />
          </p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default Prototype
