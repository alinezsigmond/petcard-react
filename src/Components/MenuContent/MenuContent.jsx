import React from 'react'

function MenuContent(props) {
    return (
        <div className="menu">
        <div className="menu-item">
          <a
            href="https://github.com/Middlerun/cheeseburger-menu"
            onClick={props.closeCallback}
            target="_blank">
            Menu item 
          </a>
        </div>

        <p className="hint">Click outside the menu to close it, or swipe it closed on touch device</p>
      </div>
    )
} 
export default MenuContent