import React, {useState} from 'react';
import css from './MyProfile.module.scss'
import profileImage from '../../images/profile_image.jpeg'
import Mybutton from "../UI_Elements/Mybutton";
import EditModal from "./EditModal/EditModal";
import {useDispatch} from "react-redux";
import {deleteUser} from "../../Redux/usersReducer";


const MyProfile = ({userData}) => {

    const dispatch = useDispatch()
    const [formVisible, setFormVisible] = useState(false)


    const {
        email: userEmail = '',
        username: userUsername = '',
        password: userPass = '',
        name: {
            firstname: userFirstname = '',
            lastname: userLastname = '',
        } = {},
        address: {
            city: userCity = '',
            street: userStreet =  '',
            number: userStreetNumber = 0,
            zipcode: userZipcode = '',
            geolocation:
                {
                lat: lAt = '',
                long: lOng = '',
                 } = {},
        } ={},
        phone: userTel = '',
        id: userId = '',
    } = userData || {}

    const destructedUserData = {userEmail,userUsername, userPass, userFirstname,userLastname, userCity, userStreet, userStreetNumber, userZipcode, lAt, lOng ,  userTel, userId,}

    const onUserDelete = () => {
        dispatch(deleteUser(userId))
    }



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
                            <Mybutton><span onClick={() => setFormVisible(true)}>Edit Profile</span></Mybutton>
                            <Mybutton><span onClick={() => onUserDelete()}>Delete Profile</span></Mybutton>
                        </div>


                    </section>

                </div>
                <div className={css.image_block}>
                    <img className={css.image_item} src={profileImage} alt="users_image"/>
                </div>
                <EditModal
                    formVisible={formVisible}
                    setFormVisible={setFormVisible}
                    destructedUserData={destructedUserData}

                />
            </div>
        </div>
    );
};

export default MyProfile;