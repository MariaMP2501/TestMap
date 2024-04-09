import React, { FunctionComponent } from 'react';
import { StepProgressBar } from './StepProgressBar';
import { ReservationForm } from './ReservationForm';
import MapCard from './MapCard';
import MapAddresses from './MapAddresses';

const Estimation: FunctionComponent = () => {
    const sectionStyle = {
        width: '90%',
        margin: '8rem auto',
        fontFamily: 'Anybody',
    };
    const sectionCardStyle = {
        display: 'flex',
        fontFamily: 'Anybody',
    };

    const mapContainerStyle = {
        flex: '1', // Chaque composant prendra la moitié de l'espace disponible
        width: '50%', // Chaque composant occupe la moitié de la largeur de l'écran
        zIndex: '5',
    };

    return (
        <div className='section1' style={sectionStyle}>
            <StepProgressBar/>
            <div className='section1' style={sectionCardStyle}>
                <div style={mapContainerStyle}>
                    <MapAddresses />
                </div>
                <div style={mapContainerStyle}>
                    <MapCard />
                </div>
            </div>
        </div>
    );
};

export default Estimation;
