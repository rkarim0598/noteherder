import React, { Component } from 'react'

class NoteList extends Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         titles: ['Kohlrabi welsh', 'Dandelion cucumber', 'Prairie turnip'],
    //         notes: ['Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.',
    //             'Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.',
    //             'Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.'
    //         ]
    //     }
    // }

    render() {
        return (
            <div className="NoteList" style={styles.noteList}>
                <h3 style={styles.h3}>Notes</h3>
                <ul id="notes" style={styles.ulNotes}>
                    <a className="active" style={styles.ulA} >
                        <li style={styles.ulLi} onClick={this.props.onClick}>
                            <div className="note" style={styles.note}>
                                <div className="note-title" style={styles.noteTitle}>
                                    {this.props.texty.titles[0]}
                                </div>
                                <div className="note-body" style={styles.noteBody}>
                                    <p>
                                        {this.props.texty.notes[0]}
                                    </p>
                                </div>
                            </div>
                        </li>
                    </a>
                    {this.props.texty.titles.slice(1).map(title =>
                        <a style={styles.ulA} >
                            <li style={styles.ulLi} onClick={this.props.onClick}>
                                <div className="note" style={styles.note}>
                                    <div className="note-title" style={styles.noteTitle}>
                                        {title}
                                    </div>
                                    <div className="note-body" style={styles.noteBody}>
                                        <p>
                                            {this.props.texty.notes[this.props.texty.titles.indexOf(title)]}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </a>
                    )}
                </ul>
            </div>
        )
    }
}


const styles = {
    noteList: {
        borderLeft: '1px solid #eee',
        borderRight: '1px solid #eee',
        width: '30rem'
    },
    h3: {
        color: '#999',
        textTransform: 'uppercase',
        fontSize: '2rem',
        fontFamily: 'Oxygen',
        fontWeight: '300',
        letterSpacing: '3px',
        margin: '20px 2rem'
    },
    ulNotes: {
        borderTop: '1px solid #eee',
        overflowY: 'scroll',
        height: 'calc(100vh - 72px)',
        listStyle: 'none',
        marginTop: '1em',
        padding: '0',
        width: '100%',
        color: '#999'
    },
    ulA: {
        color: 'inherit',
        textDecoration: 'none'
    },
    ulLi: {
        height: '100px',
        fontSize: '90%',
        cursor: 'pointer',
        overflow: 'hidden'
    },
    ulNotesA: {
        WebkitTransition: 'background-color .1s ease-in-out, color .1s ease-in-out',
        OTransition: 'background-color .1s ease-in-out, color .1s',
        transition: 'background-color .1s ease-in-out, color .1s ease-in-out'
    },
    liNote: {
        borderTop: '1px solid #eee',
        margin: '0 2rem',
        padding: '1rem 4px'
    },
    aLiNote: {
        borderTop: 'none'
    },
    noteTitle: {
        color: '#4a4a4a',
        fontFamily: '"Fauna One"',
        fontSize: '120%',
        fontWeight: '400',
        whiteSpace: 'nowrap',
        overflowX: 'hidden',
        OTextOverflow: 'ellipsis',
        textOverflow: 'ellipsis'
    },
    noteBody: {
        fontSize: '1m!important',
        margin: '0!important',
        padding: '0!important',
        color: '#999!important',
        background: 'none',
        border: 'none'
    },
    note: {
        display: 'block',
        height: '100px',
        padding: '1em',
        textDecoration: 'none'
    }
}

export default NoteList