import React from 'react';
import './Info.css';
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';

function Info() {
    return (
        <div className="info">
            <div className="info_content">
                <AirplanemodeActiveIcon className="plane" fontSize="large"/>
                <h1>WORLDWIDE SHIPPING</h1>
                <h2>Claritas etiam processus dynamicus mutationem consuetudium lectorum</h2>
                </div>   
                <div className="info_content">
                <VerifiedUserIcon className="plane" fontSize="large"/>
                <h1>CERTIFIED BY GURUS</h1>
                <h2>Claritas etiam processus dynamicus mutationem consuetudium lectorum</h2>
                </div>
                <div className="info_content">
                <LocalShippingIcon className="plane" fontSize="large"/>
                <h1>30 DAYS MONEY BACK</h1>
                <h2>Claritas etiam processus dynamicus mutationem consuetudium lectorum</h2>
                </div>         
        </div>
    )
}

export default Info
