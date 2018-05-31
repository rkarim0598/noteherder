import React, { Component } from 'react'

import './NoteForm.css'

class NoteForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      note: this.blankNote(),
    }
  }

  componentDidUpdate = () => {
    // get ID From URL
    const newId = this.props.match.params.id || ''

    // get prev ID from state
    const oldId = this.state.note.id || ''

    // continue iff they're different
    if (newId !== oldId.toString()) {
      // find note w/ new ID
      const i = this.props.notes.findIndex(currentNote => currentNote.id)
      const note = this.props.notes[i] || this.blankNote()
      // update 
      if (note.id !== this.state.note.id)
        this.setState({ note })
    }
  }

  blankNote = () => {
    return {
      id: null,
      title: '',
      body: '',
    }
  }

  handleChanges = (ev) => {
    const note = { ...this.state.note }
    note[ev.target.name] = ev.target.value
    // debugger
    var date = new Date()
    var datetime = date.getDate() + "/"
      + (date.getMonth() + 1) + "/"
      + date.getFullYear() + " @ "
      + date.getHours() + ":"
      + date.getMinutes() + ":"
      + date.getSeconds()

    this.props.saveNote(note)
    this.setState({ note })
  }

  render() {
    const { removeNote } = this.props

    return (
      <div className="NoteForm">
        <div className="form-actions">
          <button
            type="button"
            onClick={() => removeNote(this.state.note)}
          >
            <i className="far fa-trash-alt"></i>
          </button>
        </div>
        <form>
          <p>
            <input
              type="text"
              name="title"
              placeholder="Title your note"
              value={this.state.note.title}
              onChange={this.handleChanges}
            />
          </p>

          <textarea
            name="body"
            value={this.state.note.body}
            onChange={this.handleChanges}
          ></textarea>
        </form>
      </div>
    )
  }
}

export default NoteForm
