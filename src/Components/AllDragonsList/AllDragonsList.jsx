import React from 'react';
import 'antd/dist/reset.css';
import css from './AllDragonsList.module.scss'


const AllDragonsList = ({allDragonsData, onDragonClick, loading}) => {


    return (
        <div className={css.allDragons_wrapper}>
            {loading ? '' :
                allDragonsData.map(dr => {
                        const [, second] = dr.flickr_images;
                        return <div
                            key={dr.name}
                            className={css.item_container}
                            onClick={() => onDragonClick(dr)}
                        >

                            <div>
                                <h3 className={css.item_title}>{dr.name}</h3>
                                <p className={css.item_description}>{dr.description}</p>
                            </div>
                            <img className={css.item_image} src={second} alt="spaceship"/>
                        </div>;
                    }
                )}

        </div>
    );
};

export default AllDragonsList;