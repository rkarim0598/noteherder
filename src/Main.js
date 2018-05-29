import React, { Component } from 'react'

import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'
import base from './rebase'
class Main extends Component {

    constructor() {
        // localStorage.removeItem("notes")
        super()
        this.state = {
            currentNote: this.blankNote(),
            notes: []
            // notes: JSON.parse(localStorage.getItem("notes")) === null ? [] : JSON.parse(localStorage.getItem("notes"))
        }
        // if (localStorage.getItem("notes")) {
        //     this.setState({ notes: JSON.parse(localStorage.getItem("notes"))})
        // }
        
    }

    init() {
        debugger
        this.ref = base.syncState(`notes/${this.props.user.uid}`, {
            context: this,
            asArray: true,
            state: 'notes'
        })


    }

    componentDidMount() {
        this.init() 
    }

    blankNote = () => {
        return {
            id: null,
            title: '',
            body: '',
        }
    }

    setCurrentNote = (note) => {
        this.setState({ currentNote: note })
    }

    resetCurrentNote = () => {
        this.setCurrentNote(this.blankNote())
        
    }

    saveNote = (note) => {
        const notes = [...this.state.notes]

        if (note.id) {
            const i = notes.findIndex(currentNote => currentNote.id === note.id)
            notes[i] = note
        } else {
            note.id = Date.now()
            notes.push(note)
        }
        this.setState({ notes, currentNote: note })
        localStorage.setItem("notes", JSON.stringify(this.state.notes))
    }

    deleteNote = () => {
        const notes = [...this.state.notes]
        
        notes.splice(notes.indexOf(this.state.currentNote), 1)
        this.setState({ notes })
        // localStorage.setItem("notes", JSON.stringify(notes))
        this.resetCurrentNote()
    }

    render() {
        return (
            <div
                className="Main"
                style={style}
            >
                <Sidebar 
                    resetCurrentNote={this.resetCurrentNote}
                    signOut={this.props.signOut}
                />
                <NoteList
                    notes={this.state.notes}
                    setCurrentNote={this.setCurrentNote}
                />
                <NoteForm
                    currentNote={this.state.currentNote}
                    saveNote={this.saveNote}
                    deleteNote={this.deleteNote}
                />
            </div>
        )
    }
}

const style = {
    display: 'flex',
    height: '100vh',
    alignItems: 'stretch',
}

export default Main
