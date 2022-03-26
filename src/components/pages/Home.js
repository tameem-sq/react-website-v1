import React, { useState } from 'react';
import '../Navbar.css';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Header from '../cards/Header';
import ExperienceCardHome from '../cards/Experience card short';
import EducationCard from '../cards/Education card';
import AboutCard from '../cards/About card';
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card'
import styles from '.././styles.js';

// import LightMode from './LightMode'

function Home() {
    const classes = styles();
    
    return (

        <div className="App">
        <Navbar />

            <style>{'body { background-color: black; }'}</style>

            <div className={classes.wrapper}>

                <Header />
                <AboutCard />
                <ExperienceCardHome />
                <Card 
                bg={'dark'} text={'white'}>
                <div 
                className={classes.smallSpace}>
                </div>
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                    <Link to='/experience'>
                        Show all experiences → 
                    </Link>
                </div>
                <div 
                className={classes.smallSpace}>
                </div>
                </Card>
                
                <EducationCard />
            </div>

        </div>
    );
}

export default Home;