import React from 'react';
import css from './MyProfile.module.scss'
import profileImage from '../../images/profile_image.jpeg'
import Mybutton from "../UI_Elements/Mybutton";


const MyProfile = ({userData}) => {

    const {
        email: userEmail = '',
        username: userUsername = '',
        name: {
            firstname: userFirstname = '',
            lastname: userLastname = '',
        } = {},
        address: {
            city: userCity = '',
        } ={},
        phone: userTel = '',
    } = userData || {}

    return (
        <div className={css.profile_wrapper}>

            <div className={css.profile_container}>

                <div className={css.info_block}>

                    <h3>{userUsername}</h3>

                    <section className={css.users_info}>

                        <table className={css.table_wrap}>

                            <tbody className={css.table_body}>

                            <tr className={css.table_row}>
                                <td className={css.table_item}>Email:</td>
                                <td className={css.table_item}>{userEmail}</td>
                            </tr>
                            <tr className={css.table_row}>
                                <td className={css.table_item}>Username:</td>
                                <td className={css.table_item}>{userUsername}</td>
                            </tr>
                            <tr className={css.table_row}>
                                <td className={css.table_item}>Name:</td>
                                <td className={css.table_item}>{userFirstname}</td>
                            </tr>
                            <tr className={css.table_row}>
                                <td className={css.table_item}>Last Name:</td>
                                <td className={css.table_item}>{userLastname}</td>
                            </tr>
                            <tr className={css.table_row}>
                                <td className={css.table_item}>City:</td>
                                <td className={css.table_item}>{userCity}</td>
                            </tr>
                            <tr className={css.table_row}>
                                <td className={css.table_item}>Tel:</td>
                                <td className={css.table_item}>{userTel}</td>
                            </tr>

                            </tbody>

                        </table>

                        <div className={css.buttons_block}>
                            <Mybutton>Edit Profile</Mybutton>
                            <Mybutton>Delete Profile</Mybutton>
                        </div>


                    </section>

                </div>
                <div className={css.image_block}>
                    <img className={css.image_item} src={profileImage} alt="users_image"/>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;