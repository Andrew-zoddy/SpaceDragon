import React from 'react';
import css from './DragonOverview.module.scss'
import {Collapse, Spin,} from "antd";
import 'antd/dist/antd.dark.css';

const {Panel} = Collapse;


const DragonOverview = React.forwardRef(({
                                             clickedDragonData,
                                             dragonDataOverview,
                                             overViewVisible,
                                             setOverViewVisible,
                                             loading,
                                         }, ref) => {

    // Destructuring incoming Object and declaring variables
    const {
        description: dragonDescription = '',
        name: dragonName = '',
        diameter: {
            meters: dragonDiameterMeters = 0,
            feet: dragonDiameterFeet = 0
        } = {},
        heat_shield: {
            material: dragMaterial = '',
            size_meters: dragSize_meters = 0,
            temp_degrees: dragTemp_degrees = 0,
            dev_partner: dragDev_partner = '',
        } = {},
        height_w_trunk: {
            meters: dragonHeightMeters = 0,
            feet: dragonHeightFeet = 0
        } = {},
        dry_mass_kg: dragonMassDry = 0,
        first_flight: dragonFirstFlight = '',
        flickr_images: [dragonImage = '', ...tailImages] = [],
        wikipedia: dragonWiki = '',
        ...tail
    } = overViewVisible ? clickedDragonData : dragonDataOverview || {};


    return (
        <div className={css.overview_wrapper}>

            <h3 className={css.overview_title} ref={ref}>Dragon Overview</h3>

            {loading && <Spin/>}

            <p className={css.overview_text}>{dragonDescription}</p>

            <div className={css.overview_container}>

                <div className={css.overview_table}>
                    <table style={{width: '100%', marginBottom: '2rem'}}>

                        <tbody className={css.table_body}>

                        <tr className={css.table_row}>
                            <td className={css.table_item}>Name</td>
                            <td style={{textAlign: 'right'}} className={css.table_item}>"{dragonName}"</td>
                        </tr>
                        <tr className={css.table_row}>
                            <td className={css.table_item}>first flight</td>
                            <td style={{textAlign: 'right'}} className={css.table_item}>"{dragonFirstFlight}"</td>
                        </tr>

                        <tr className={css.table_row}>
                            <td className={css.table_item}>Wiki</td>
                            <td style={{textAlign: 'right'}} className={css.table_item}>
                                <a target={"_blank"} href={dragonWiki} rel="noreferrer">Dragon on Wikipedia</a>
                            </td>
                        </tr>

                        <tr className={css.table_row}>
                            <td className={css.table_item}>Diameter</td>
                            <td style={{textAlign: 'right'}} className={css.table_item}>{dragonDiameterMeters} m.
                                / {dragonDiameterFeet} .ft
                            </td>
                        </tr>
                        <tr className={css.table_row}>
                            <td className={css.table_item}>Height</td>
                            <td style={{textAlign: 'right'}}
                                className={css.table_item}>{dragonHeightMeters} m./{dragonHeightFeet} .ft
                            </td>
                        </tr>
                        <tr className={css.table_row}>
                            <td className={css.table_item}>Mass</td>
                            <td style={{textAlign: 'right'}} className={css.table_item}>{dragonMassDry} kg.</td>
                        </tr>
                        </tbody>
                    </table>

                    <Collapse defaultActiveKey={['0']}>
                        <Panel header="Explore more about Dragon" key="1">
                            <ul> Heat shield
                                <li>Dev. Partner : {dragDev_partner}</li>
                                <li>Material: {dragMaterial}</li>
                                <li>Size in Meters: {dragSize_meters}</li>
                                <li>Temperature in degrees: {dragTemp_degrees}</li>
                            </ul>
                        </Panel>
                    </Collapse>


                </div>


                <div className={css.image_block}>
                    <img className={css.image_item}
                         src={dragonImage}
                         alt="alt_imag"/>
                </div>

            </div>

        </div>


    );
});

export default DragonOverview;