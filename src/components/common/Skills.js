import React, { Component } from 'react'
import { Grid, Progress } from 'semantic-ui-react'

class Skills extends Component {
  render() {
    return (
      <Grid>
        <Grid.Row col={12}>
          <div style={{ display: 'flex' }}>{this.props.skill} <Progress success style={{ margin: 'auto', width: '75%' }}
                                                                        progress={this.props.progress}/></div>
        </Grid.Row>
      </Grid>
    )
  }
}

export default Skills
