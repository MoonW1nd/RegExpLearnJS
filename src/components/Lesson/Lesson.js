import React from 'react'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import './Lesson.css'

export default class Lesson extends React.Component {
  render() {
    return(
      <section className='Lesson'>
        <Paper zDepth={1} className='Paper'>
          <TextField
            className='Paper-TextField'
            hintText="RegExp"
            style={{
              width: '50vw',
            }}
          />
        </Paper>
      </section>
    )
  }
}