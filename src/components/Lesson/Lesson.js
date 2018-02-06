import React from 'react'
import TextField from 'material-ui/TextField'

export default class Lesson extends React.Component {
  render() {
    return(
      <section className='Lesson'>
        <TextField
          hintText="RegExp"
        />
      </section>
    )
  }
}