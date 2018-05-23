import React from 'react'

const NoteList = () => {
    return (
        <div class="NoteList" style={styles.noteList}>
            <h3 style={styles.h3}>Notes</h3>
            <ul id="notes">
                <a class="active">
                    <li>
                        <div class="note">
                            <div class="note-title">
                                Kohlrabi welsh
                            </div>
                            <div class="note-body">
                                <p>
                                    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.
                                </p>
                            </div>
                        </div>
                    </li>
                </a>
                <a>
                    <li>
                        <div class="note">
                            <div class="note-title">
                                Dandelion cucumber
                  </div>
                            <div class="note-body">
                                <p>
                                    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.
                                </p>
                            </div>
                        </div>
                    </li>
                </a>
                <a>
                    <li>
                        <div class="note">
                            <div class="note-title">
                                Prairie turnip
                  </div>
                            <div class="note-body">
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
}

export default NoteList