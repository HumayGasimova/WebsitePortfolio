/**
* Libraries
*/

import React, {
    useState,
    useEffect
} from 'react';

import {
    connect
} from 'react-redux';

import {
    bindActionCreators
} from 'redux';

import { 
    CSSTransition 
} from 'react-transition-group';

import {
    withRouter
} from 'react-router-dom';

/**
* Components
*/

import SidebarItem from '../../SmallParts/SidebarItem/sidebarItem';

/**
* Actions
*/

import * as Actions from '../../../actions';

/**
* Styles
*/

import './sidebar.scss';

/**
* Selectors
*/

// import * as Selectors from '../../../reducers/selectors';

/**
* Images
*/

import MyLogo2 from '../../../images/myLogo2.png';
import MyLogoCafe from '../../../images/myLogoCafe.png';
import MyLogoCrypto from '../../../images/myLogoCrypto.png';

/**
* Hooks
*/

import {
    sidebarItems
} from '../../../constants/sidebarItems';

/**
* Sidebar component definition and export
*/

export const Sidebar = (props) => {

    /**
    * State
    */

    /**
    * Methods
    */

    // const sidebarOnClick = (path) => {
    //     props.history.push(`/${path}`);
    // }

    const renderSidebarItems = () => {
        return(
            <div className="sidebar-items">
                {sidebarItems.map((el) => {
                    return(
                        <SidebarItem 
                            key={el.id}
                            text={el.text}
                            active={el.active}
                            // onClick={() => sidebarOnClick(el.path)}
                        />
                    )
            })}</div>
        )
    }

    /**
    * Markup
    */

    return(
        <div className="sidebar">
            <div className="sidebar-logo">
                <div className="sidebar-image-logo">
                    <img src={MyLogo2}/>
                </div>
                <div className="sidebar-image-cafe">
                    <img src={MyLogoCafe}/>
                </div>
                <div className="sidebar-image-crypto">
                    <img src={MyLogoCrypto}/>
                </div>
            </div>
            {renderSidebarItems()}
        </div>
    );
}
 export default connect(
    (state) => {
        return {
            // menuButtonIsPressed: Selectors.getMenuButtonIsPressedState(state),
        };
    },
    (dispatch) => {
        return {
            // toggleMenuButton: bindActionCreators(Actions.toggleMenuButton, dispatch),
        };
    }
)(withRouter(Sidebar));
 