import React, {useEffect, useState} from 'react';
import NavBar from "./Components/NavBar/NavBar";
import './App.css'
import 'antd/dist/antd.dark.css';
import {message} from "antd";
import {Route, Routes} from "react-router-dom";
import MainPage from "./Components/MainPage/MainPage";
import AllDragonsList from "./Components/AllDragonsList/AllDragonsList";
import {useDispatch, useSelector} from "react-redux";
import {getAllDragonsData, getDragonsData} from "./Redux/dragonReducer";
import DragonOverview from "./Components/DragonOverview/DragonOverview";
import ModalAuth from "./Components/ModalAuth/ModalAuth";
import Preloader from "./Components/Preloader/Preloader";


const App = () => {
    // declaring variables for data in Redux State
    const dispatch = useDispatch()
    const dragonData = useSelector(state => state.dragonData.dragonData)
    const allDragonsData = useSelector(state => state.dragonData.allDragons)
    //  setting All dragons List Detailed info visible
    const [overViewVisible, setOverViewVisible] = useState(false)
    // getting data from clicked item in All dragons List
    const [clickedDragonData, setClickedDragonData] = useState('')
    // State for using sign in/sign up modal visibility
    const [modalVisible, setModalVisible] = useState(false)
    //Error/Success tracking variables
    const error = useSelector(state => state.app.error)
    const success = useSelector(state => state.app.success)
    //Preloader State
    const loading = useSelector(state => state.app.loading)


    //  Getting Dragon 1 data
    useEffect(() => {
        dispatch(getDragonsData())
    }, [dispatch])
    // Getting dragons data for All dragons List
    useEffect(() => {
        dispatch(getAllDragonsData())
    }, [dispatch])
    //Success tracking
    useEffect(() => {
        if (!success) return
        message.success(success);
    }, [success])
    //Error tracking
    useEffect(() => {
        if (!error) return
        message.error(error.message);
    }, [error])


    // Function for getting info from clicked dragon in All Dragons List and component render
    const onDragonClick = (chosenDragon) => {
        setOverViewVisible(true)
        setClickedDragonData(chosenDragon)
    }


    return (

        <div className='app_wrapper'>
            {loading && <Preloader/>}
            <NavBar
                setOverViewVisible={setOverViewVisible}
                setModalVisible={setModalVisible}
                loading={loading}

            />
            {modalVisible && <ModalAuth setModalVisible={setModalVisible}/>}
            <Routes>
                <Route
                    element={
                        <MainPage
                            loading={loading}
                            modalVisible={modalVisible}
                            dragonData={dragonData}
                            setModalVisible={setModalVisible}
                        />} exact path={'/'}/>
                <Route element={
                    !overViewVisible
                        ?
                        <AllDragonsList onDragonClick={onDragonClick}
                                        allDragonsData={allDragonsData}
                                        loading={loading}
                        />
                        : <DragonOverview clickedDragonData={clickedDragonData}
                                          overViewVisible={overViewVisible}
                                          setOverViewVisible={setOverViewVisible}
                        />
                } exact path={'/dragonlist'}
                />
                <Route element={<div style={{textAlign: "center", fontSize: '2rem', margin: '25%'}}>ERROR 404 - page not
                    found</div>}
                       path={'/*'}/>
            </Routes>
        </div>
    );
};

export default App;
