import React from 'react';
import 'antd/dist/antd.dark.css';
import css from './AllDragonsList.module.scss'
import Preloader from "../Preloader/Preloader";


const AllDragonsList = ({allDragonsData, onDragonClick,loading}) => {


    console.log(loading)
    return (
        <div className={css.allDragons_wrapper}>
            {loading ? <Preloader/> :
            allDragonsData.map(dr =>
                <div
                    key={dr.name}
                    className={css.item_container}
                    onClick={() => onDragonClick(dr)}
                >
                    <div>
                        <h3 className={css.item_title}>{dr.name}</h3>
                        <p className={css.item_description}>{dr.description}</p>
                    </div>
                    <img className={css.item_image} src={dr.flickr_images[1]} alt="spaceship"/>
                </div>
            )}

        </div>
    );
};

export default AllDragonsList;