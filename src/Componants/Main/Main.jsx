import React from 'react';
import Header from '../Header/Header';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Main;