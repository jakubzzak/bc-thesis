import React, { useState, useEffect } from 'react'
import styles from '../../styles/Home.module.css'
import { Grid, GridColumn as Column, GridRow as Row } from 'semantic-ui-react'
import { FormattedMessage } from 'react-intl'


const Home = () => {

  const [screenHeight, setScreenHeight] = useState(0)

  useEffect(() => {
    setScreenHeight(window.innerHeight + 30)
  }, [])

  return (
    <Grid id={'Home'} verticalAlign={'middle'} className={styles.home} style={{ height: screenHeight }}
          textAlign={'center'}>
      <Row style={{ margin: 'auto', maxWidth: '900px', padding: '3em' }}>
        <Column>
          <h1 style={{ fontFamily: 'Chalkduster, fantasy' }}>
            <FormattedMessage id="web.title"
                              defaultMessage="Detection traffic signs"
                              description="Link on react page"/>
          </h1>
          <h3 style={{ fontFamily: 'Chalkduster, fantasy' }}>
            <FormattedMessage id="web.thesis.label"
                              defaultMessage="Bachelor thesis"
                              description="Bachelor thesis label"/>
          </h3>
        </Column>
      </Row>
    </Grid>
  )
}

export default Home
