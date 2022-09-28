import React from 'react';
import {Spin} from "antd";
import css from './Preloader.module.scss'

const Preloader = () => {
    return (
        <div className={css.preloader_wrapper}>
            <Spin size="large"  />
        </div>
    );
};

export default Preloader;