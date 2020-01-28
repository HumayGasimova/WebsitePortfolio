/**
 * Libraries
 */

import React,{
    Component
} from 'react';

/**
 * Components
 */

/**
 * Styles
 */

import './empty.scss';

/**
 * EmptyDivV1 component definition and export
 */

class EmptyDivV1 extends Component {

    /**
    * Constructor
    */

    constructor (props){
        super(props);
    }
    
    /**
    * Markup
    */

    render(){
        return(
            <div className="emptyDivV1"/>
        );
    }
}

export default EmptyDivV1;
