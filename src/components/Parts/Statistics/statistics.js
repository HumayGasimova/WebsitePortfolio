/**
* Libraries
*/

import React, {
    useState,
    useEffect
} from 'react';

/**
* Styles
*/

import './statistics.scss';

/**
* Components
*/

import StatisticsItem from '../../SmallParts/StatisticsItem/statisticsItem';

/**
* Utility
*/

import {
    EH1
} from '../../UtilityComponents';

/**
* Constants
*/

import {
    statisticsArray
} from '../../../constants/statisticsArray';


/**
* Statistics component definition and export
*/

export const Statistics = () => {

    /**
    * State
    */

    const [showComponent, setShowComponent] = useState(false);

    /**
    * Methods
    */

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll)
    }, []);

    const handleScroll = () => {
        let scrollHeight = document.body.scrollTop;
        let el = document.getElementById("statistics");
      
        if(scrollHeight >= el.offsetTop - window.innerHeight/2 + 400){
            setShowComponent(true);
        }
    }

    const renderStatisticsItems = () => {
        return(
            <div className="statistics-items">
                {statisticsArray.map((el,i) => {
                    return(
                        <div  key={i}>
                            <EH1/>
                            <StatisticsItem
                                icon={el.icon}
                                number={el.number}
                                header={el.header}
                            />
                            <EH1/>
                        </div>
                    )
                })}
            </div>
        )
    }

    /**
    * Markup
    */

    return(
        <div 
            className="statistics"
            id="statistics"
        >
            {showComponent ? renderStatisticsItems() : null}
        </div>
    );
}

export default Statistics;
 