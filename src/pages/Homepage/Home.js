import React from 'react';
import {InfoSection} from '../../components';
import Pricing from '../../components/Pricing/Pricing';
import {homeObjOne, homeObjTwo, homeObjThree} from './Data';

const Home = () => {
    return (
        <>
            <InfoSection {...homeObjOne}/>
            <Pricing/>
        </>
    )
}

export default Home
