import React from 'react'

import quill from './quill.svg'
import newIcon from './new.png'
import newHover from './new-hover.png'

const Sidebar = () => {
    return (
        <nav 
            class="Sidebar"
            style={styles.sidebar}
        >
          <div 
            class="logo"
            style={styles.logo}
          >
            <img 
                src={quill} alt="Noteherder"
                style={styles.logoImg} 
            />
          </div>
          <a class="new-note" href="/notes">
            <img src={newHover} alt="New note" />
            <img class="outline" src={newIcon} alt="New note" />
          </a>
          <div class="SignOut">
            <button>
              <i class="fa fa-sign-out"></i>
            </button>
          </div>
        </nav>    
    )
}

const styles = {
    sidebar: {
        width: '6rem',
        backgroundColor: '#f3f3f3',
        padding: '0.5rem 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    logo: {
        fontFamily: '"Fauna One"',
        color: '#666',
        fontSize: '3rem',
    },
    logoImg: {
        width: '3rem',
        paddingLeft: '0.4rem',
    }
}
export default Sidebar