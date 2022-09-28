import React from 'react';
import css from './MyButton.module.scss'

const Mybutton = ({children, ...props}) => {
    return (
        <button className={css.myBtn}>{children}</button>
    );
};

export default Mybutton;