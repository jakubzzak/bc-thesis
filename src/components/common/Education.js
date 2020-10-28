import React from 'react';
import { Grid, GridRow as Row, GridColumn as Column } from 'semantic-ui-react';

const Education = ({ startYear, endYear, schoolName, schoolDescription }) => {
    return(
        <Grid centered columns={2}>
            <Row>
                <Column width={4}>
                    <p>{ startYear } - { endYear }</p>
                </Column>
                <Column width={8}>
                    <h4 style={{ marginTop:'0px' }}>{ schoolName }</h4>
                    <p>{ schoolDescription }</p>
                </Column>
            </Row>
        </Grid>
    )
}

export default Education;
