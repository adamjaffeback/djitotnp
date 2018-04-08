import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

class Header extends PureComponent {
  render() {
    const { pathname } = this.props.location;

    const isHome = pathname === '/';
    const isInstructions = pathname === '/instructions';

    return (
      <header className="globalHeader">
        <ul>
          <li className={!isHome ? 'active' : ''}>
            {
              isHome ?
                'Home' : <Link to="/">Home</Link>

            }
          </li>
          <li className={!isInstructions ? 'active' : ''}>
            {
              isInstructions ?
                'Just Another Page' : <Link to="/instructions">Instructions</Link>
            }
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
