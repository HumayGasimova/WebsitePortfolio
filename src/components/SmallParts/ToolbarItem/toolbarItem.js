/**
* Libraries
*/

import React, {
    useState,
    useEffect
} from 'react';

import {
    withRouter
} from 'react-router-dom';

import { 
    FontAwesomeIcon 
} from '@fortawesome/react-fontawesome';

/**
* Styles
*/

import './toolbarItem.scss';

/**
* Icons
*/

import { 
    faCaretDown
} from '@fortawesome/free-solid-svg-icons'


/**
* ToolbarIcon component definition and export
*/

export const ToolbarItem = (props) => {

    /**
    * State
    */

    const [isHovering, setIsHovering] = useState(false);

    /**
    * Methods
    */

    const handleMouseEnter = (text) => {
        if(text === "Portfolio"){
            setIsHovering(true);
        }
    }

    const handleMouseLeave = () => {
        setIsHovering(false);
    }

    const toolbarOptionOnClick = (path) => {
        if(path === "portfolioSingleId"){
            props.history.push(`/${path}:1`, {id: 1});
        }else{
            props.history.push(`/${path}`);
        }
    }

    const renderOptions = () => {
        return(
            <div 
                className={props.optionClassName} 
                onMouseLeave={handleMouseLeave}
            >{props.options.map((el, i) => {
                return(
                    <div 
                        key={i}
                        className="item-option" 
                        onClick={() => toolbarOptionOnClick(el.optPath)}
                    >
                        {el.optText}
                    </div>
                )
            })}</div>
        )
    }
    
    /**
    * Markup
    */

    return(
        <div className="toolbar-item-wrapper">
            <div 
                className={`${props.className}`}
                onClick={props.text !== "Portfolio" ? props.onClick : null}
                onMouseEnter={() => handleMouseEnter(props.text)} 
            >
                {props.text}
                {props.options.length !== 0 ? <FontAwesomeIcon icon={faCaretDown} size="sm" className="icon-arrow-down"/> : null}
            </div>
            {isHovering ? renderOptions() : null}
        </div>
    );
}

export default withRouter(ToolbarItem);
