import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import base from './rebase'
import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'

class Main extends Component {
    constructor() {
        super()
        this.state = {
            notes: [],
        }
    }

    componentWillMount() {
        base.syncState(`notes/${this.props.uid}`, {
            context: this,
            state: 'notes',
            asArray: true,
        })
    }

    saveNote = (note) => {
        let shouldRedirect = false
        const notes = [...this.state.notes]
        var date = new Date()
            var datetime = date.getDate() + "/"
                + (date.getMonth() + 1) + "/"
                + date.getFullYear() + " @ "
                + date.getHours() + ":"
                + date.getMinutes() + ":"
                + date.getSeconds()
        if (note.id) {
            // existing note
            note.updated = datetime
            const i = notes.findIndex(currentNote => currentNote.id === note.id)
            notes[i] = note
        } else {
            // new note
            note.id = Date.now()
            note.updated = datetime
            notes.push(note)
            shouldRedirect = true
        }

        this.setState(
            { notes },
            () => {
                if (shouldRedirect) {
                    this.props.history.push(`/notes/${note.id}`)
                }
            }
        )
    }

    removeNote = (currentNote) => {
        const notes = [...this.state.notes]
        const i = notes.findIndex(note => note.id === currentNote.id)

        if (i > -1) {
            notes.splice(i, 1)
            this.setState({ notes })
            this.props.history.push('/notes')
        }
    }

    render() {
        const formProps = {
            saveNote: this.saveNote,
            removeNote: this.removeNote,
            notes: this.state.notes,
        }

        return (
            <div
                className="Main"
                style={style}
            >
                <Sidebar signOut={this.props.signOut} />
                <NoteList notes={this.state.notes} />
                <Switch>
                    <Route
                        path="/notes/:id"
                        render={navProps => (
                            <NoteForm
                                {...formProps}
                                {...navProps}
                            />
                        )}
                    />
                    <Route
                        render={navProps => (
                            <NoteForm
                                {...formProps}
                                {...navProps}
                            />
                        )}
                    />
                </Switch>


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
