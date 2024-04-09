import React, { FunctionComponent } from 'react';
import { StepProgressBar } from './StepProgressBar';
import { ReservationForm } from './ReservationForm';

const Estimation: FunctionComponent = () => {
    const sectionStyle = {
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
        zIndex: '3',
    };

    return (
           <div>
			<StepProgressBar/>
		   </div>
        <div className='section1' style={sectionStyle}>

        
        <div className='section1' style={sectionCardStyle}>
            <div style={map_Card_Style}>
                Maps
            </div>
            
        </div>
        </div>
    );
};

export default Estimation;
