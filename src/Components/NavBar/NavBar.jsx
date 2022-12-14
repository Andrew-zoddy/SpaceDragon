import React, {useState} from 'react';
import css from './NavBar.module.scss'
import logo from '../../images/spacex_logo_black.png'
import Mybutton from "../UI_Elements/Mybutton";
import {Link, NavLink, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setAuth} from "../../Redux/appReducer";
import {message} from "antd";
import {MenuOutlined} from "@ant-design/icons";
import BurgerMenu from "../BurgerMenu/BurgerMenu";


const NavBar = ({setOverViewVisible, setModalVisible}) => {
    const dispatch = useDispatch()
    // authorisation  state flag
    const isAuth = useSelector(state => state.app.isAuth)

    //burgerState
    const [showBurgerVisible, setShowBurgerVisible] = useState(false);

    // hook for navigating through spa
    const navigate = useNavigate()
    // on click navigate to main page
    const navigateToHomePage = () => {
        navigate('/');
    };
    // on sign in click function
    const signIn = () => {
        setShowBurgerVisible(false)
        setModalVisible(true)
    }
    //on logout click function
    const logOut = () => {
        dispatch(setAuth(false))
        localStorage.removeItem('token')
        localStorage.removeItem('isAuth')
        message.error('You were logged out');
        setShowBurgerVisible(false)
    };
    // on AllDragons click in burger menu
    const onLinkClick = () => {
        setOverViewVisible(false)
        setShowBurgerVisible(false)
    }

    return (
        <div className={css.navBar_wrapper}>
            <div className={css.navBar_container}>


                {/*//BURGER MENU*/}
                <div
                    onClick={() => setShowBurgerVisible(true)}
                    className={css.burgerBtn_wrapper}>
                    {/*button toggle*/}
                    {!showBurgerVisible ? <MenuOutlined/> : ''}

                </div>
                {
                    showBurgerVisible &&
                    <BurgerMenu>

                        <div onClick={() => setShowBurgerVisible(false)} className={css.burger_closeBtn}>X</div>
                        <NavLink style={{color: 'white'}} to={'/main'}>
                            <div onClick={() => setShowBurgerVisible(false)} className={css.menu_item_burger}>Dragon
                            </div>
                        </NavLink>
                        <NavLink style={{color: 'white'}} to={'/dragonList'}>
                            <div onClick={() => onLinkClick()} className={css.menu_item_burger}>All Dragons List</div>
                        </NavLink>
                        {
                            isAuth &&
                            <NavLink style={{color: 'whitesmoke'}} to={'/myProfile'}>
                                <div onClick={onLinkClick}
                                     className={!isAuth ? css.menu_item_invisible : css.menu_item_burger}>Profile
                                </div>
                            </NavLink>
                        }
                        {!isAuth && !JSON.parse(localStorage.getItem('token'))
                            ?
                            <div className={css.signUp_block_burger}>
                                <Mybutton><span onClick={() => signIn()}>Sign in</span></Mybutton>
                                <p style={{padding: '1rem', marginBottom: '0'}}>or</p>
                                <Mybutton><span>Sign up</span></Mybutton>
                            </div>
                            :
                            <div className={css.logged_user_burger}>
                                <p className={css.users_name_burger}>"Hi, John"</p>
                                <Mybutton><Link to={'/'} className={css.logoutBtn}
                                                onClick={() => logOut()}>Logout</Link></Mybutton>
                            </div>
                        }
                    </BurgerMenu>
                }

                {/*//BURGER MENU*/}

                <div onClick={navigateToHomePage} style={{cursor: 'pointer'}} className={css.logo_block}>
                    <img className={css.logo} src={logo} alt="logo"/>
                </div>
                <menu className={css.menu_container}>
                    <NavLink to={'/main'}>
                        <div className={css.menu_item}>Dragon</div>
                    </NavLink>
                    <NavLink to={'/dragonList'}>
                        <div onClick={() => setOverViewVisible(false)} className={css.menu_item}>All Dragons List</div>
                    </NavLink>
                    {
                        isAuth &&
                        <NavLink to={'/myProfile'}>
                            <div onClick={onLinkClick}
                                 className={!isAuth ? css.menu_item_invisible : css.menu_item}>Profile
                            </div>
                        </NavLink>
                    }
                </menu>
                {!isAuth && !JSON.parse(localStorage.getItem('token'))
                    ?
                    <div className={css.signUp_block}>
                        <Mybutton><span onClick={() => setModalVisible(true)}>Sign in</span></Mybutton>
                        <p style={{padding: '1rem', marginBottom: '0'}}>or</p>
                        <Mybutton><span>Sign up</span></Mybutton>
                    </div>
                    :
                    <div className={css.logged_user}>
                        <p className={css.users_name}>"Hi, John"</p>
                        <Mybutton><Link to={'/'} onClick={() => logOut()}>Logout</Link></Mybutton>
                    </div>
                }

            </div>
        </div>
    );
};

export default NavBar;