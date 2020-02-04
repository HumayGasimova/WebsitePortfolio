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
    withRouter
} from 'react-router-dom';

/**
* Components
*/

import SidebarItem from '../../SmallParts/SidebarItem/sidebarItem';
import SocialMediaIcon from '../../SmallParts/SocialMediaIcon/socialMediaIcon';

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

import * as Selectors from '../../../reducers/selectors';

/**
* Images
*/

// import MyLogoOutPart from '../../../images/MainLogo.png';
// import MyLogoInPart from '../../../images/GHB.png';
import MyLogo from '../../../images/FinalLogo.png';
import MyLogoCafe from '../../../images/myLogoCafe.png';
import MyLogoCrypto from '../../../images/myLogoCrypto.png';

/**
* Constants
*/

import {
    menuItemsArray
} from '../../../constants/menuItems';

import {
    socialMediaIcons
} from '../../../constants/socialMediaIcons';

/**
* Sidebar component definition and export
*/

export const Sidebar = (props) => {

    /**
    * State
    */

    useEffect(() => {
        props.initMenuItems(menuItemsArray);
    }, [])

    /**
    * Methods
    */

    const sidebarOnClick = (path) => {
        props.history.push(props.match.url + (path === "" ? path : `/${path}`));
    }

    const renderSidebarItems = () => {
        return(
            <div className="sidebar-items">
                {props.menuItems.map((el) => {
                    return(
                        <SidebarItem 
                            key={el.id}
                            text={el.text}
                            active={el.active}
                            onClick={() => sidebarOnClick(el.path)}
                        />
                    )
            })}</div>
        )
    }

    const renderSocialMediaIcons = () => {
        return(
            <div className="icons-soc-med" >{socialMediaIcons.map((el, i) => {
                return(
                    <SocialMediaIcon
                        key={i}
                        name={el.name}
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
                    <img src={MyLogo}/>
                </div>
                <div className="sidebar-image-cafe">
                    <img src={MyLogoCafe}/>
                </div>
                <div className="sidebar-image-crypto">
                    <img src={MyLogoCrypto}/>
                </div>
            </div>
            {renderSidebarItems()}
            {renderSocialMediaIcons()}

            {/* <SocialMediaIcons
                linkFacebook={"http://www.facebook.com/"}
                linkLinkedIn={"http://www.linkedin.com/"}
                linkInstagram={"http://www.instagram.com/"}
                linkTwitter={"http://www.twitter.com/"}
            /> */}
        </div>
    );
}
 export default connect(
    (state) => {
        return {
            menuItems: Selectors.getMenuItemsState(state),
        };
    },
    (dispatch) => {
        return {
            initMenuItems: bindActionCreators(Actions.initMenuItems, dispatch),
        };
    }
)(withRouter(Sidebar));
 