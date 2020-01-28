/**
* Libraries
*/

import React, {
    useState,
    useEffect
} from 'react';

import { 
    FontAwesomeIcon 
} from '@fortawesome/react-fontawesome';

/**
* Styles
*/

import './service.scss';

/**
* Icons
*/

import { 
    faLightbulb,
    faLaptopCode,
    faCog,
    faQuestionCircle
} from '@fortawesome/free-solid-svg-icons'

/**
* Service component definition and export
*/

export const Service = (props) => {

    /**
    * State
    */
   
    /**
    * Methods
    */

    const renderIcon = () => {
        switch(props.icon) {
            case "faLightbulb":
                return (<FontAwesomeIcon icon={faLightbulb} size="2x" className="icon-bulb"/>);
            case "faLaptopCode":
                return (<FontAwesomeIcon icon={faLaptopCode} size="2x" className="icon-laptop"/>);
            case "faCog":
                return (<FontAwesomeIcon icon={faCog} size="2x" className="icon-cog"/>);
            case "faQuestionCircle":
                return (<FontAwesomeIcon icon={faQuestionCircle} size="2x" className="icon-question"/>);
        }
    }


    /**
    * Markup
    */

    return(
        <div className="service">
            {/* <div className="service-hexagon-container">
                <div className={props.hexagonStyle}/>
            </div> */}
            <div className="stage">
                <div className="ball bubble"/>
            </div>
            {renderIcon(props.icon)}
            <div className="service-header">{props.header}</div>
            <div className="service-text">{props.text}</div>
        </div>
    );
}

export default Service;
 