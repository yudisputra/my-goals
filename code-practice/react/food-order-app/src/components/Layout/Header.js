import React, { Fragment } from 'react';

const Header = prop => {
    return (
        <Fragment>
            <header>
                <h1>React Meals</h1>
                <button>Cart</button>
            </header>
            <div>
                <img></img>
            </div>
        </Fragment>
    )
}

export default Header;