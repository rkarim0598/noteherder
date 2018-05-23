import React, { Component } from 'react';

import './App.css';
import Main from './Main'

class App extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     titles: ['Kohlrabi welsh', 'Dandelion cucumber', 'Prairie turnip' ],
  //     notes: ['Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.',
  //             'Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.',
  //             'Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.'
  //            ]
  //   }
  // }
  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}

export default App;
