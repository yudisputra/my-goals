import React, { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import mealImages from '../../images/meals.jpg';
import classes from './Header.module.css';

const Header = prop => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>React Meals</h1>
                <HeaderCartButton />
            </header>
            <div className={classes['main-image']}>
                <img src={mealImages} alt="A Table Of Delicious Food!" />
            </div>
        </Fragment>
    )
}

export default Header;