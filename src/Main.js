import React, { Component } from 'react'

import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'

class Main extends Component {
    constructor() {
        super()
        this.state = {
            titles: ['Kohlrabi welsh', 'Dandelion cucumber', 'Prairie turnip'],
            notes: ['Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.',
                'Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.',
                'Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.'
            ],
            titulo: '',
            nota: ''
        }
    }
    render() {
        return (
            <div
                className="Main"
                style={style}
            >
                <Sidebar />
                <NoteList texty={this.state}
                    onClick={clickSomething.bind(this)}
                />
                <NoteForm texty={this.state}/>
            </div>
        )
    }
}
function clickSomething(ev) {
    const title = ev.target.closest('li').querySelector('.note-title').textContent
    const bowdy = ev.target.closest('li').querySelector('.note-body').textContent
    
    this.setState({ titulo: title, nota: bowdy})
}
const style = {
    display: 'flex',
    height: '100vh',
    alignItems: 'stretch'
}

export default Main