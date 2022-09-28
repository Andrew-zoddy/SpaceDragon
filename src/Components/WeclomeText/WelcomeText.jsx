import React from 'react';
import css from './WelcomeText.module.scss'

const WelcomeText = ({scrollToOverview}) => {
    return (
        <div className={css.welcome_text}>
            <h3 style={{fontSize: '3rem', fontWeight: '700', color: 'white'}}>Dragon</h3>
            <hr style={{padding: '0.7rem'}}/>
            <p>SENDING HUMANS AND CARGO INTO SPACE</p>
            <div onClick={scrollToOverview} className={css.scroll_down}></div>
        </div>
    );
};

export default WelcomeText;