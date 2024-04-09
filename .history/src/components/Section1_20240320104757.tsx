import React, { FunctionComponent } from 'react';
import { CommandCard } from './CommandCard';
import { MapCard } from './MapCard';
import { StepProgressBar } from './StepProgressBar';

const Section1: FunctionComponent = () => {
    const sectionStyle = {
        margin: '8rem',
        display: 'flex',
		fontFamily: 'Anybody',
    };

    const command_Card_Style = {
        flex: '1',
        width: '40%', // Changer la largeur pour occuper 1/3 de l'écran
        heigth: '20rem',
        zIndex: '3',
    };

    const map_Card_Style = {
        flex: '1',
        width: '66.66%',
		marginLeft:'25rem',
        zIndex: '3',
    };

    return (
        <div>
            <StepProgressBar/>
        </div>
        <div className='section1' style={sectionStyle}>
            <div style={command_Card_Style}>
                Reservation
                <CommandCard/>
            </div>
            <div style={map_Card_Style}>
                Maps
                <MapCard/>
            </div>
        </div>
    );
};

export default Section1;
