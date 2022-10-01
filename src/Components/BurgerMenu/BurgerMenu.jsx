import React from 'react';
import css from './BurgerMenu.module.scss'

const BurgerMenu = ({children}) => {
    return (

        <div className={css.burger_menuWrapper}>
            <div className={css.burger_container}>
                {children}
            </div>
        </div>

    );
};

export default BurgerMenu;