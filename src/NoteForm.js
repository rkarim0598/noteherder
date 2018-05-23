import React from 'react'

class NoteForm extends React.Component {
    render() {
        return (
            <div className="NoteForm" style={styles.noteForm}>
                <div className="form-actions" style={styles.formActions}>
                    <button type="button" style={styles.button}>
                        <i className="fa fa-trash-o" style={styles.buttonIcon}></i>
                    </button>
                </div>
                <form style={styles.form}>
                    <p>
                        <input
                            type="text"
                            name="title"
                            placeholder="Title your note"
                            style={styles.inputTitle}
                            value={this.props.texty.titulo}
                        />
                    </p>

                    <textarea name="body" style={styles.textArea} value={this.props.texty.nota} ></textarea>
          </form>
            </div>
        )
    }
}

const styles = {
    noteForm: {
        // msFlexPositive: '1',
        flexGrow: '1',
        padding: '0 3rem'
    },
    formActions: {
        paddingTop: '1rem',
        marginLeft: '-2rem',
        display: 'flex',
        // mxFlexLinePack: 'center',
        alignContent: 'center'
    },
    button: {
        border: 'none',
        background: 'none',
        padding: '0'
    },
    buttonSubmit: {
        backgroundColor: '#008bf8',
        borderRadius: '4px',
        color: '#fff',
        fontSize: '1.4rem',
        padding: '1rem'
    },
    buttonIcon: {
        color: '#999',
        fontSize: '2rem',
        margin: '0'
    },
    form: {
        margin: '0 auto',
        maxWidth: '80rem'
    },
    inputTitle: {
        border: 'none',
        fontSize: '200%',
        fontFamily: '"Fauna One"',
        color: '#008bf8',
        fontWeight: '400',
        width: '100%',
        outline: 'none'
    },
    textArea: {
        borderColor: '#a676f7',
        width: '100%',
        height: 'calc(100vh - 140px)',
        fontSize: '1.3em'
    }
}
export default NoteForm