import React from 'react'

const NoteList = () => {
    return (
        <div className="NoteList" style={styles.noteList}>
            <h3 style={styles.h3}>Notes</h3>
            <ul id="notes" style={styles.ulNotes}>
                <a className="active" style={styles.ulA}>
                    <li style={styles.ulLi}>
                        <div className="note">
                            <div className="note-title">
                                Kohlrabi welsh
                            </div>
                            <div className="note-body">
                                <p>
                                    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.
                                </p>
                            </div>
                        </div>
                    </li>
                </a>
                <a style={styles.ulA}>
                    <li style={styles.ulLi}>
                        <div className="note">
                            <div className="note-title">
                                Dandelion cucumber
                            </div>
                            <div className="note-body">
                                <p>
                                    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.
                                </p>
                            </div>
                        </div>
                    </li>
                </a>
                <a style={styles.ulA}>
                    <li style={styles.ulLi}>
                        <div className="note">
                            <div className="note-title">
                                Prairie turnip
                            </div>
                            <div className="note-body">
                                <p>
                                    Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.
                                </p>
                            </div>
                        </div>
                    </li>
                </a>
            </ul>
        </div>
    )
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
        webkitTransition: 'background-color .1s ease-in-out, color .1s ease-in-out',
        oTransition: 'background-color .1s ease-in-out, color .1s',
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
        oTextOverflow: 'ellipsis',
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