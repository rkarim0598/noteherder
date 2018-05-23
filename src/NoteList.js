import React from 'react'

import './NoteList.css'
import Note from './Note'

const NoteList = () => {
    const notes = [
        {
            id: 1,
            title: 'JS thoughts',
            body: 'blah blah blah',
        },
        {
            id: 2,
            title: 'Breakfast',
            body: 'nope'
        },
        {
            id: 3,
            title: 'Class notes',
            body: 'React me act'
        }
    ]
  return (
    <div className="NoteList">
      <h3>Notes</h3>
      <ul id="notes">
        { notes.map(note => <Note key={note.id} note={note}/> ) }        
      </ul>
    </div>
  )
}

export default NoteList
