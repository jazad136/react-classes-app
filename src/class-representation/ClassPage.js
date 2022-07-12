import React from 'react'
import {Grid, Segment, Container} from 'semantic-ui-react';
const ClassPage = ({name, descriptions, imageCaptions}) => {
  return (
    <Container>
      <Grid>
        <Grid.Column width={16}>
          <h2 className="classesName">{name}</h2>
          <h2 className="subtitle">{descriptions[0]}</h2>
          <div className="image1">Image 1</div>
        </Grid.Column>
      
        <Grid.Column width={3}>
          {/* spacer */}
        </Grid.Column>
        <Grid.Column width={5}>
          <div className="image-2">Image 2</div>
          <h3 className="imageCaption-2">{imageCaptions[1]}</h3>
        </Grid.Column>
        <Grid.Column width={5}>
          <div className="description-2">{descriptions[1]}</div>
        </Grid.Column>
        <Grid.Column width={3}>
          {/* spacer */}
        </Grid.Column>

        <Grid.Column width={3}>
          {/* spacer */}
        </Grid.Column>
        <Grid.Column width={5}>
          <div className="image-2">Image 2</div>
          <h3 className="imageCaption-2">{imageCaptions[2]}</h3>
        </Grid.Column>
        <Grid.Column width={5}>
          <div className="description-2">{descriptions[2]}</div>
        </Grid.Column>
        <Grid.Column width={3}>
          {/* spacer */}
        </Grid.Column>


      </Grid>
    </Container>
  )
}

export default ClassPage