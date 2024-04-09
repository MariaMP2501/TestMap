import React, { FunctionComponent } from 'react';
import { StepProgressBar } from './StepProgressBar';
import { ReservationForm } from './ReservationForm';
import MapCard from './MapCard';
import MapAddresses from './MapAddresses';

const Estimation: FunctionComponent = () => {
    const sectionStyle = {
		width:'90%',
        margin: '8rem',
		fontFamily: 'Anybody',
    };
    const sectionCardStyle = {
        margin: '8rem',
        display: 'flex',
		fontFamily: 'Anybody',
    };

    const map_Card_Style = {
        flex: '1',
        width: '100%',
        zIndex: '5',
    };

    return (
           
        <div className='section1' style={sectionStyle}>

        <StepProgressBar/>
        <div className='section1' style={sectionCardStyle}>
		<div>
				<MapAddresses/>
			</div>
            <div style={map_Card_Style}>
               
				<MapCard/>
            </div>
			
            
        </div>
        </div>
    );
};

export default Estimation;
